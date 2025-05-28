/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import type { GridColDef } from '@mui/x-data-grid';
import DinamicTable from '../components/DinamicTable';
import { Alert, Button, Grid, Snackbar, Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ModalDinamicaCliente from './FormularioCliente';

interface Cliente {
    id: number | null;
    idcliente: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
}

// Componentes estilizados
const HeaderCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 50%, #42a5f5 100%)',
    color: 'white',
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.3)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(45deg, #2196f3 30%, #64b5f6 90%)',
    borderRadius: '25px',
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
    },
}));

const TableContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e0e0e0',
}));

const Clientes = () => {
    const [dataClients, setDataClients] = React.useState<Cliente[]>([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [opcion, setOpcion] = React.useState(1);
    const [selectedCliente, setSelectedCliente] = React.useState<Cliente | null>(null);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState<'success' | 'error'>('success');

    React.useEffect(() => {
        fetch('http://localhost:8000/cliente')
            .then(response => response.json())
            .then(dataResponse => setDataClients(dataResponse.data.map((row: { idcliente: any }) => ({ ...row, id: row.idcliente }))))
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    const columns: GridColDef[] = [
        { field: "idcliente", headerName: "#", width: 30 },
        { field: "nombre", headerName: "Nombres", width: 146 },
        { field: "apellido", headerName: "Apellidos", width: 146 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "telefono", headerName: "Teléfono", width: 200 },
    ];

    const AgregarCliente = () => {
        setOpcion(1);
        setSelectedCliente(null);
        setOpenModal(true);
    };

    const ActualizarCliente = (row: Cliente) => {
        setOpcion(2);
        setSelectedCliente(row);
        setOpenModal(true);
    };

    const EliminarCliente = (idCliente: number) => {
        const dato = { "idcliente": idCliente }
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este cliente?\nSe perderan las mascotas que se han registrado de este?');
        if (confirmDelete) {
            fetch(`http://localhost:8000/cliente`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dato)
            })
                .then(response => response.json())
                .then(data => {
                    setSnackbarMessage('Cliente eliminado correctamente');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    setTimeout(() => { window.location.reload() }, 1500);
                })
                .catch(error => {
                    console.error('Error al eliminar el cliente:', error);
                    setSnackbarMessage('Error al eliminar el cliente');
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
                        <PersonIcon sx={{ fontSize: 40, mr: 2 }} />
                        <Typography variant="h3" component="h1" fontWeight="bold">
                            Nuestros Clientes
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Administra la base de datos de clientes y propietarios de mascotas
                    </Typography>
                </CardContent>
            </HeaderCard>

            <Box sx={{ mb: 4 }}>
                <StyledButton
                    onClick={AgregarCliente}
                    startIcon={<GroupAddIcon />}
                    size="large"
                >
                    Registrar Nuevo Cliente
                </StyledButton>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TableContainer>
                        <DinamicTable 
                            rows={dataClients} 
                            columns={columns} 
                            onEdit={ActualizarCliente} 
                            onDelete={EliminarCliente} 
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

            <ModalDinamicaCliente
                open={openModal}
                onClose={handleCloseModal}
                opcion={opcion}
                objCliente={selectedCliente}
            />
        </Box>
    );
}

export default Clientes;