/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import type { ChangeEvent } from 'react';
import Alert from '@mui/material/Alert';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
} from '@mui/material';

interface Cliente {
  idcliente: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  imagen: string | null;
}

interface ModalDinamicaProps {
  open: boolean;
  onClose: () => void;
  opcion: number;
  objCliente: Cliente | null;
}

const ModalDinamicaCliente: React.FC<ModalDinamicaProps> = ({ open, onClose, opcion, objCliente }) => {
  const [cliente, setCliente] = React.useState<Cliente>({
    idcliente: 0,
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    imagen: null,
  });

  const [file, setFile] = React.useState<File | null>(null);
  const [alerta, setAlerta] = React.useState<{ tipo: 'success' | 'error'; mensaje: string } | null>(null);

  const limpiarCampos = () => {
    setCliente({ idcliente: 0, nombre: '', apellido: '', email: '', telefono: '', imagen: null });
    setFile(null);
  };

  const LeerArchivo = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
  };

  React.useEffect(() => {
    if (objCliente) {
      setCliente({
        idcliente: objCliente.idcliente,
        nombre: objCliente.nombre,
        apellido: objCliente.apellido,
        email: objCliente.email,
        telefono: objCliente.telefono,
        imagen: objCliente.imagen,
      });
      setFile(null);
    } else {
      limpiarCampos();
    }
  }, [objCliente]);

  const AccionCliente = (e: React.FormEvent) => {
    e.preventDefault();
    const metodo = opcion === 1 ? 'POST' : 'PUT';
    const url = `http://localhost:8000/cliente`;

    const formData = new FormData();
    formData.append('nombre', cliente.nombre);
    formData.append('apellido', cliente.apellido);
    formData.append('email', cliente.email);
    formData.append('telefono', cliente.telefono);
    if (file) formData.append('imagen', file);
    if (!file && cliente.imagen) formData.append('imagenActual', cliente.imagen);

    if (opcion !== 1) {
      formData.append('idcliente', String(cliente.idcliente));
    }


    fetch(url, {
      method: metodo,
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error en la solicitud');
        return res.json();
      })
      .then(() => {
        setAlerta({ tipo: 'success', mensaje: opcion === 1 ? 'Cliente registrado' : 'Cliente actualizado' });
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.error('Error al procesar la solicitud:', error);
        setAlerta({ tipo: 'error', mensaje: opcion === 1 ? 'Error al registrar cliente.' : `Error al editar cliente. ${error}` });
      });
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>{opcion === 1 ? 'Agregar cliente' : 'Editar cliente'}</DialogTitle>
        <form onSubmit={AccionCliente}>
          <DialogContent>
            <TextField
              label="Nombre"
              fullWidth
              margin="normal"
              value={cliente.nombre}
              onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
            />
            <TextField
              label="Apellido"
              fullWidth
              margin="normal"
              value={cliente.apellido}
              onChange={(e) => setCliente({ ...cliente, apellido: e.target.value })}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={cliente.email}
              onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
            />
            <TextField
              label="Teléfono"
              type="tel"
              fullWidth
              margin="normal"
              value={cliente.telefono}
              onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })}
            />
            <br />
            <label>Añade una foto de perfil</label>
            <br />
            <label htmlFor="fotoperfil">
              <input
                id="fotoperfil"
                type="file"
                accept=".jpg,.png,.gif,.jpeg"
                style={{ display: 'none' }}
                onChange={LeerArchivo}
              />
              <Button variant="outlined" component="span" sx={{ mt: 1 }}>
                Seleccionar imagen
              </Button>
            </label>

            {/* Vista previa: nueva imagen o imagen existente */}
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Vista previa"                
                style={{ width: '100px', marginTop: '10px', borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : cliente.imagen ? (
              <img
                src={`http://localhost:8000/uploads/${cliente.imagen}`}
                alt="Imagen actual"
                style={{ width: '100px', marginTop: '10px', borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="secondary">
              Cancelar
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Terminar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        open={!!alerta}
        autoHideDuration={1500}
        onClose={() => setAlerta(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setAlerta(null)} severity={alerta?.tipo} variant="filled" sx={{ width: '100%' }}>
          {alerta?.mensaje}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ModalDinamicaCliente;
