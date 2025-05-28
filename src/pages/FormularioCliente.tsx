/* eslint-disable @typescript-eslint/no-unused-vars */


import * as React from 'react';
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
  });

  const [alerta, setAlerta] = React.useState<{ tipo: 'success' | 'error'; mensaje: string } | null>(null);

  const limpiarCampos = () => {
    setCliente({
      idcliente: 0,
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
    });
  };

  React.useEffect(() => {
    if (objCliente !== null) {
      setCliente({
        idcliente: objCliente.idcliente,
        nombre: objCliente.nombre,
        apellido: objCliente.apellido,
        email: objCliente.email,
        telefono: objCliente.telefono,
      });
    } else {
      limpiarCampos();
    }
  }, [objCliente]);

  const AccionCliente = (e: React.FormEvent) => {
    e.preventDefault();

    const metodo = opcion === 1 ? 'POST' : 'PUT';
    const url = `http://localhost:8000/cliente`;
    

    fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la solicitud');
        }
        return res.json();
      })
      .then(() => {
        setAlerta({
          tipo: 'success',
          mensaje: opcion === 1 ? 'Cliente registrado' : 'Cliente actualizado',
        });
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.error('Error al procesar la solicitud:', error);
        setAlerta({
          tipo: 'error',
          mensaje: opcion === 1 ? 'Error al registrar cliente.' : `Error al editar cliente. ${error}`,
        });
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
              onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
              fullWidth
              margin="normal"
              value={cliente.nombre}
            />
            <TextField
              label="Apellido"
              onChange={(e) => setCliente({ ...cliente, apellido: e.target.value })}
              fullWidth
              margin="normal"
              value={cliente.apellido}
            />
            <TextField
              label="Email"
              type="email"
              onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
              fullWidth
              margin="normal"
              value={cliente.email}
            />
            <TextField
              label="Teléfono"
              type="tel"
              onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })}
              fullWidth
              margin="normal"
              value={cliente.telefono}
            />
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
        open={alerta !== null}
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
