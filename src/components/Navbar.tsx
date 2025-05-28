import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import ProductIcon from '@mui/icons-material/Storefront'; 
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useState } from "react";

const navItems = [
    { text: "Inicio", path: "/", icon: <HomeIcon sx={{ color: '#fff' }} /> },
    { text: "Productos", path: "/products", icon: <ProductIcon sx={{ color: '#fff' }} /> },
    { text: "Mascotas", path: "/pets", icon: <PetsIcon sx={{ color: '#fff' }} /> },
    { text: "Clientes", path: "/clients", icon: <PeopleIcon sx={{ color: '#fff' }} /> },
    { text: "Quienes Somos", path: "/about", icon: <InfoIcon sx={{ color: '#fff' }} /> },
    { text: "Contactanos", path: "/contact", icon: <ContactMailIcon sx={{ color: '#fff' }} /> }
    
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box 
            onClick={handleDrawerToggle} 
            sx={{ 
                textAlign: 'center', 
                background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #43a047 100%)',
                height: '100%',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.02)"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E")',
                    pointerEvents: 'none'
                }
            }}
        >
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: 1, 
                my: 3,
                position: 'relative',
                zIndex: 1
            }}>
                <LocalHospitalIcon sx={{ color: '#fff', fontSize: 28 }} />
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: '#fff', 
                        fontWeight: 'bold',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    VetCare+
                </Typography>
            </Box>

            <List sx={{ position: 'relative', zIndex: 1 }}>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <Link
                            to={item.path}
                            style={{
                                textDecoration: 'none',
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                color: '#fff',
                                width: '100%',
                                borderRadius: '8px',
                                margin: '4px 8px',
                                transition: 'all 0.3s ease',
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                                e.currentTarget.style.transform = 'translateX(8px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            {item.icon}
                            <ListItemText 
                                primary={item.text} 
                                sx={{ 
                                    '& .MuiListItemText-primary': {
                                        fontWeight: 500,
                                        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                    }
                                }}
                            />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Menu para pantallas grandes */}
            <AppBar 
                sx={{ 
                    width: '100%', 
                    background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #43a047 100%)',
                    boxShadow: '0 4px 20px rgba(46, 125, 50, 0.3)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.03)"%3E%3Cpath d="M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z"/%3E%3C/g%3E%3C/svg%3E")',
                        pointerEvents: 'none'
                    }
                }}
            >
                <Toolbar sx={{ position: 'relative', zIndex: 1 }}>
                    <IconButton 
                        color="inherit" 
                        edge="start" 
                        onClick={handleDrawerToggle} 
                        sx={{ 
                            mr: 2, 
                            display: { sm: 'none' },
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                transform: 'scale(1.1)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1, 
                        flexGrow: 1 
                    }}>
                        <LocalHospitalIcon sx={{ color: '#fff', fontSize: 32 }} />
                        <Typography 
                            variant="h6" 
                            component="div" 
                            sx={{ 
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                letterSpacing: '0.5px'
                            }}
                        >
                            VetCare+
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
                        {navItems.map((item) => (
                            <Button 
                                key={item.text}
                                component={Link}
                                to={item.path}
                                startIcon={item.icon}
                                sx={{
                                    color: '#fff',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    px: 2.5,
                                    py: 1,
                                    borderRadius: '25px',
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    transition: 'all 0.3s ease',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                    },
                                    '& .MuiButton-startIcon': {
                                        transition: 'transform 0.3s ease',
                                    },
                                    '&:hover .MuiButton-startIcon': {
                                        transform: 'scale(1.2) rotate(5deg)',
                                    }
                                }}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Menu para moviles */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 280,
                        background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #43a047 100%)',
                        color: '#fff',
                        borderRight: '3px solid rgba(255,255,255,0.2)',
                    },
                }}
            >
                {drawer}
            </Drawer>
            
            {/* Espacio para el contenido */}
            <Toolbar />
        </Box>
    );
};

export default Navbar;