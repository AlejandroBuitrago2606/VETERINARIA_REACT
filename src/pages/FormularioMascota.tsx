/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

interface Mascota {
  idmascota: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  idcliente: number;
}

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
  objMascota: Mascota | null;
}

const ModalDinamicaMascota: React.FC<ModalDinamicaProps> = ({ open, onClose, opcion, objMascota }) => {
  const [mascota, setMascota] = React.useState<Mascota>({

    idmascota: 0,
    nombre: '',
    especie: '',
    raza: '',
    edad: 0,
    idcliente: 0
  });

  const [clientes, setClientes] = React.useState<Cliente[]>([]);

  const [alerta, setAlerta] = React.useState<{ tipo: 'success' | 'error' | 'warning'; mensaje: string } | null>(null);

  const limpiarCampos = () => {
    setMascota({
      idmascota: 0,
      nombre: '',
      especie: '',
      raza: '',
      edad: 0,
      idcliente: 0
    });
  };

  function cargarClientes() {

    fetch('http://localhost:8000/cliente')
      .then(response => response.json())
      //Le digo a TypeScript que el id de las filas de la tabla van a ser los idaprendiz de los registros devueltos.
      .then(dataResponse => setClientes(dataResponse.data))
      .catch(error => console.error('Error al obtener los datos:', error));
  }

  React.useEffect(() => {

    cargarClientes();
    if (objMascota !== null) {
      setMascota({
        idmascota: objMascota.idmascota,
        nombre: objMascota.nombre,
        especie: objMascota.especie,
        raza: objMascota.raza,
        edad: objMascota.edad,
        idcliente: objMascota.idcliente
      });
    } else {
      limpiarCampos();
    }
  }, [objMascota]);

  const AccionMascota = (e: React.FormEvent) => {
    e.preventDefault();

    if (mascota.idcliente == null || mascota.idcliente == 0 || mascota.nombre == '') {

      setAlerta({
        tipo: 'warning',
        mensaje: `Completa todos los campos!!!!`,
      });
      return;
    }

    const metodo = opcion === 1 ? 'POST' : 'PUT';
    const url = `http://localhost:8000/mascotas`;


    fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mascota),
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
          mensaje: opcion === 1 ? 'Mascota registrada' : 'Mascota actualizada',
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
          mensaje: opcion === 1 ? 'Error al registrar mascota.' : `Error al editar mascota. ${error}`,
        });
      });
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>{opcion === 1 ? 'Agregar mascota' : 'Editar mascota'}</DialogTitle>
        <form onSubmit={AccionMascota}>
          <DialogContent>
            <TextField
              label="Nombre"
              onChange={(e) => setMascota({ ...mascota, nombre: e.target.value })}
              fullWidth
              margin="normal"
              value={mascota.nombre}
            />
            <TextField
              label="Especie"
              onChange={(e) => setMascota({ ...mascota, especie: e.target.value })}
              fullWidth
              margin="normal"
              value={mascota.especie}
            />
            <TextField
              label="Raza"
              onChange={(e) => setMascota({ ...mascota, raza: e.target.value })}
              fullWidth
              margin="normal"
              value={mascota.raza}
            />
            <TextField
              label="Edad"
              type='number'
              onChange={(e) => setMascota({ ...mascota, edad: Number(e.target.value) })}
              fullWidth
              margin="normal"
              value={mascota.edad}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="cliente-label">Cliente</InputLabel>
              <Select
                labelId="cliente-label"
                label="Dueño de la mascota...."
                value={mascota.idcliente}
                onChange={(e) =>
                  setMascota({ ...mascota, idcliente: e.target.value })
                }
              >
                {clientes.map((c) => (
                  <MenuItem key={c.idcliente} value={c.idcliente}>
                    {c.nombre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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

export default ModalDinamicaMascota;
