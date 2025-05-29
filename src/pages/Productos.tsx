/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type ChangeEvent } from 'react';
import Papa from 'papaparse';
import type { GridColDef } from '@mui/x-data-grid';
import DinamicTable from '../components/DinamicTable';
import { Alert, Button, Snackbar, Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ProductIcon from '@mui/icons-material/Storefront'; 
import GroupAddIcon from '@mui/icons-material/GroupAdd';

interface Producto {

    idproducto: number | null;
    cantidad: number;
    descripcion: string;
    precio: number;
    unidadmedida: string;
    categoria: string;
}


// Componentes estilizados
const HeaderCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(90deg,rgba(255, 123, 0, 1) 0%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 1) 100%);',
    color: 'white',
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.3)',
}));

const StyledButton = styled(Button)(() => ({
    background: 'linear-gradient(90deg,rgba(255, 123, 0, 1) 0%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 1) 100%);',
    borderRadius: '25px',
    padding: '12px 30px',
    color: '#000000',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
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















const Productos = () => {
    const [dataProducts, setDataProducts] = React.useState<Producto[]>([]);
    const [alerta, setAlerta] = React.useState<{ tipo: 'success' | 'error'; mensaje: string } | null>(null);

    React.useEffect(() => {
        fetch('http://localhost:8000/productos')
            .then(response => response.json())
            .then(dataResponse => setDataProducts(dataResponse.data.map((row: { idproducto: any }) => ({ ...row, id: row.idproducto }))))
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    const columns: GridColDef[] = [
        { field: "idproducto", headerName: "#", width: 30 },
        { field: "cantidad", headerName: "Cantidad", width: 146 },
        { field: "descripcion", headerName: "Descripción", width: 146 },
        { field: "precio", headerName: "Precio", width: 200 },
        { field: "unidadmedida", headerName: "Unidad de medida", width: 200 },
        { field: "categoria", headerName: "Categoria", width: 200 }
    ];

    const AgregarProducto = () => {
    };


    const ActualizarProducto = (row: Producto) => {
    };

    const EliminarProducto = (idProducto: number) => {
    };




    const LeerArchivo = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        Papa.parse<string[]>(file, {
            header: true,
            skipEmptyLines: true,
            complete: results => {
                // results.data es un array de objetos según encabezados
                const productos: Producto[] = results.data.map((row: any) => ({
                    idproducto:0,
                    cantidad: parseInt(row['cantidad'] || '0', 10),
                    descripcion: row['descripcion'] || '',
                    precio: parseFloat(row['precio'] || '0'),
                    unidadmedida: row['unidadmedida'] || '0',
                    categoria: row['categoria'] || ''
                }));

                
                
                return ImportarProductos(productos);
                
            },
            error: error => {
                console.error('Error al parsear CSV:', error);
            }
        });

        
    };





    function ImportarProductos(listaProductos:Producto[]) {

        console.log(listaProductos);

        fetch('http://localhost:8000/productos/sbmasiva', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listaProductos),
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
                    mensaje: 'Productos Importados correctamente a la base de datos.'
                });
                
                window.location.reload();

            })
            .catch((error) => {
                alert(`Error al procesar la solicitud: ${error}`);
                setAlerta({
                    tipo: 'error',
                    mensaje: `Error al importar los productos: ${error}`,
                });
                window.location.reload();

            });




    }

    return (
        <Box sx={{ p: 3, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <HeaderCard>
                <CardContent sx={{ py: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <ProductIcon sx={{ fontSize: 40, mr: 2 }} />
                        <Typography variant="h3" component="h1" fontWeight="bold">
                            Nuestros Productos
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Administra e importa tus productos
                    </Typography>
                </CardContent>
            </HeaderCard>

            <div className="col-6">

                <Box sx={{ mb: 4 }}>
                    <StyledButton
                        onClick={AgregarProducto}
                        startIcon={<GroupAddIcon />}                        
                        size="large"
                    >
                        Registrar Nuevo Producto
                    </StyledButton>
                </Box>
            </div>
            <div className="col-6">

                <Box sx={{ mb: 4 }}>
                    <input
                        id="csv-upload"
                        type="file"
                        accept=".csv"
                        style={{ display: 'none' }}
                        onChange={LeerArchivo}
                    />
                    <label htmlFor="csv-upload">
                        <StyledButton
                            as="span"
                            startIcon={<GroupAddIcon />}
                            size="large"
                        >
                            Importar productos desde un archivo CSV
                        </StyledButton>
                    </label>
                </Box>

            </div>





            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TableContainer>
                        <DinamicTable
                            rows={dataProducts}
                            columns={columns}
                            onEdit={ActualizarProducto}
                            onDelete={EliminarProducto}
                        />
                    </TableContainer>
                </Grid>
            </Grid>

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
        </Box>
    );
}

export default Productos;
