/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import type { GridColDef } from '@mui/x-data-grid';
import DinamicTable from '../components/DinamicTable';
import { Alert, Button, Grid, Snackbar, Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import AddIcon from '@mui/icons-material/Add';
import ModalDinamicaMascota from './FormularioMascota';

interface Mascota {
    id: number | null;
    idmascota: number;
    nombre: string;
    especie: string;
    raza: string;
    edad: number;
    idcliente: number;
    nombrecliente: string | null;
}

interface Cliente {
    idcliente: number;
    nombre: string;
    apellido: string;
}

// Componentes estilizados
const HeaderCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #43a047 100%)',
    color: 'white',
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: '0 8px 32px rgba(46, 125, 50, 0.3)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(45deg, #4caf50 30%, #66bb6a 90%)',
    borderRadius: '25px',
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'linear-gradient(45deg, #388e3c 30%, #4caf50 90%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
    },
}));

const TableContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e0e0e0',
}));

const Mascotas = () => {
    const [dataPets, setDataPets] = React.useState<Mascota[]>([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [opcion, setOpcion] = React.useState(1);
    const [selectedPet, setSelectedPet] = React.useState<Mascota | null>(null);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState<'success' | 'error'>('success');
    const [clientes, setClientes] = React.useState<Cliente[]>([]);

    React.useEffect(() => {
        Promise.all([
            fetch('http://localhost:8000/mascotas').then(res => res.json()),
            fetch('http://localhost:8000/cliente').then(res => res.json()),
        ])
            .then(([mascotasJson, clientesJson]) => {
                const clientesArray: Cliente[] = clientesJson.data;
                const mascotasConNombre = mascotasJson.data.map((m: any) => ({
                    ...m,
                    id: m.idmascota,
                    nombrecliente:
                        clientesArray.find(c => c.idcliente === m.idcliente)
                            ? `${clientesArray.find(c => c.idcliente === m.idcliente)!.nombre} ${clientesArray.find(c => c.idcliente === m.idcliente)!.apellido}`
                            : '—',
                }));
                setClientes(clientesArray);
                setDataPets(mascotasConNombre);
            })
            .catch(err => console.error(err));
    }, []);

    const columns: GridColDef[] = [
        { field: "idmascota", headerName: "#", width: 70 },
        { field: "nombre", headerName: "Nombre", width: 146 },
        { field: "especie", headerName: "Especie", width: 146 },
        { field: "raza", headerName: "Raza", width: 200 },
        { field: "edad", headerName: "Edad", width: 200 },
        { field: 'nombrecliente', headerName: 'Dueño', width: 200 }
    ];

    const AgregarMascota = () => {
        setOpcion(1);
        setSelectedPet(null);
        setOpenModal(true);
    };

    const ActualizarMascota = (row: Mascota) => {
        setOpcion(2);
        setSelectedPet(row);
        setOpenModal(true);
    };

    const EliminarMascota = (idMascota: number) => {
        const dato = { "idmascota": idMascota }
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta mascota?');
        if (confirmDelete) {
            fetch(`http://localhost:8000/mascotas`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dato)
            })
                .then(response => response.json())
                .then(data => {
                    setSnackbarMessage('Mascota eliminada correctamente');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    setTimeout(() => { window.location.reload() }, 1500);
                })
                .catch(error => {
                    console.error('Error al eliminar la mascota:', error);
                    setSnackbarMessage('Error al eliminar la mascota');
                    setSnackbarSeverity('error');
                    setSnackbarOpen(true);
                });
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Box sx={{ p: 3, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <HeaderCard>
                <CardContent sx={{ py: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <PetsIcon sx={{ fontSize: 40, mr: 2 }} />
                        <Typography variant="h3" component="h1" fontWeight="bold">
                            Registro de Mascotas
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Gestiona la información de todas las mascotas registradas en la clínica
                    </Typography>
                </CardContent>
            </HeaderCard>

            <Box sx={{ mb: 4 }}>
                <StyledButton
                    onClick={AgregarMascota}
                    startIcon={<AddIcon />}
                    size="large"
                >
                    Registrar Nueva Mascota
                </StyledButton>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TableContainer>
                        <DinamicTable 
                            rows={dataPets} 
                            columns={columns} 
                            onEdit={ActualizarMascota} 
                            onDelete={EliminarMascota} 
                        />
                    </TableContainer>
                </Grid>
            </Grid>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={1500}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} variant="filled" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            <ModalDinamicaMascota
                open={openModal}
                onClose={handleCloseModal}
                opcion={opcion}
                objMascota={selectedPet}
            />
        </Box>
    );
}

export default Mascotas;