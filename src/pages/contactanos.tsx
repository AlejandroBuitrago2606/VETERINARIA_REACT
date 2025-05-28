/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, Container, Grid, Card, CardContent, TextField, Button, Paper, Chip, Divider } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmergencyIcon from '@mui/icons-material/Emergency';
import SendIcon from '@mui/icons-material/Send';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// Animaciones
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Componentes estilizados
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #43a047 100%)',
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.1,
  },
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
  animation: `${fadeInUp} 0.6s ease-out`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
  border: '1px solid #e0e0e0',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(46, 125, 50, 0.15)',
    borderColor: '#4caf50',
  },
}));

const EmergencyButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #f44336 30%, #ff5722 90%)',
  animation: `${pulse} 2s infinite`,
  '&:hover': {
    background: 'linear-gradient(45deg, #d32f2f 30%, #e64a19 90%)',
    animation: 'none',
  },
}));

const FloatingIcon = styled(Box)(() => ({
  animation: `${float} 3s ease-in-out infinite`,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#4caf50',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2e7d32',
    },
  },
}));

const Contactanos = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    petType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      petType: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: 'Teléfono',
      content: '+1 (555) 123-4567',
      description: 'Llamadas de 8:00 AM - 6:00 PM'
    },
    {
      icon: <WhatsAppIcon />,
      title: 'WhatsApp',
      content: '+1 (555) 987-6543',
      description: 'Mensajes 24/7'
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'info@veterinaria.com',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: <LocationOnIcon />,
      title: 'Dirección',
      content: '123 Veterinary St, Pet City',
      description: 'Zona Norte, Local 456'
    }
  ];

  const scheduleInfo = [
    { day: 'Lunes - Viernes', hours: '8:00 AM - 8:00 PM' },
    { day: 'Sábados', hours: '9:00 AM - 6:00 PM' },
    { day: 'Domingos', hours: '10:00 AM - 4:00 PM' },
    { day: 'Emergencias', hours: '24 horas' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ color: 'white', animation: `${fadeInUp} 0.8s ease-out` }}>
                <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                  Contáctanos
                </Typography>
                <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
                  Estamos aquí para cuidar de tu mascota
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                  Nuestro equipo de veterinarios profesionales está disponible para 
                  atender todas tus consultas y brindar el mejor cuidado para tu compañero peludo.
                </Typography>
                
                <EmergencyButton
                  variant="contained"
                  size="large"
                  startIcon={<EmergencyIcon />}
                  sx={{ mr: 2, mb: 2 }}
                >
                  Emergencia 24/7
                </EmergencyButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FloatingIcon sx={{ textAlign: 'center' }}>
                <LocalHospitalIcon sx={{ fontSize: 120, color: 'rgba(255,255,255,0.8)' }} />
              </FloatingIcon>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Contact Information Cards */}
      <Container maxWidth="lg" sx={{ py: 6, mt: -4, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ContactCard elevation={0}>
                <Box sx={{ color: '#2e7d32', mb: 2 }}>
                  {info.icon}
                </Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {info.title}
                </Typography>
                <Typography variant="body1" color="primary" fontWeight="medium" gutterBottom>
                  {info.content}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {info.description}
                </Typography>
              </ContactCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <AnimatedCard>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <ContactMailIcon sx={{ mr: 2, color: '#2e7d32', fontSize: 30 }} />
                  <Typography variant="h4" component="h2" fontWeight="bold">
                    Envíanos un Mensaje
                  </Typography>
                </Box>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Nombre Completo"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Correo Electrónico"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Tipo de Mascota"
                        name="petType"
                        value={formData.petType}
                        onChange={handleInputChange}
                        variant="outlined"
                        placeholder="Ej: Perro, Gato, Ave..."
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <StyledTextField
                        fullWidth
                        label="Asunto"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <StyledTextField
                        fullWidth
                        label="Mensaje"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        placeholder="Describe la situación de tu mascota o tu consulta..."
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? null : <SendIcon />}
                        sx={{
                          background: 'linear-gradient(45deg, #2e7d32 30%, #4caf50 90%)',
                          py: 1.5,
                          px: 4,
                          '&:hover': {
                            background: 'linear-gradient(45deg, #1b5e20 30%, #388e3c 90%)',
                          },
                        }}
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </AnimatedCard>
          </Grid>

          {/* Schedule and Additional Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <AnimatedCard>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <AccessTimeIcon sx={{ mr: 2, color: '#2e7d32' }} />
                    <Typography variant="h5" fontWeight="bold">
                      Horarios de Atención
                    </Typography>
                  </Box>
                  
                  {scheduleInfo.map((schedule, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body1" fontWeight="medium">
                          {schedule.day}
                        </Typography>
                        <Chip 
                          label={schedule.hours}
                          color={schedule.day === 'Emergencias' ? 'error' : 'primary'}
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      {index < scheduleInfo.length - 1 && <Divider sx={{ mt: 1 }} />}
                    </Box>
                  ))}
                </CardContent>
              </AnimatedCard>
            </Box>

            <AnimatedCard>
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <EmergencyIcon sx={{ fontSize: 40, color: '#f44336', mb: 2 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold" color="error">
                  Emergencias 24/7
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Para emergencias fuera del horario de atención, 
                  llama a nuestra línea de emergencia.
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<PhoneIcon />}
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  (555) 911-PETS
                </Button>
              </CardContent>
            </AnimatedCard>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 6, mt: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
            Nuestra Ubicación
          </Typography>
          
          <AnimatedCard>
            <Box
              sx={{
                height: 400,
                background: 'linear-gradient(45deg, #e8f5e8 25%, transparent 25%), linear-gradient(-45deg, #e8f5e8 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e8f5e8 75%), linear-gradient(-45deg, transparent 75%, #e8f5e8 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#2e7d32'
              }}
            >
              <LocationOnIcon sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Veterinaria Pet Care
              </Typography>
              <Typography variant="body1" textAlign="center">
                123 Veterinary Street, Pet City<br />
                Zona Norte, Local 456<br />
                CP: 12345
              </Typography>
            </Box>
          </AnimatedCard>
        </Container>
      </Box>
    </Box>
  );
};

export default Contactanos;