import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip, Avatar } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScheduleIcon from '@mui/icons-material/Schedule';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PetTreatmentIcon from '@mui/icons-material/Healing';
import EmergencyIcon from '@mui/icons-material/Emergency';

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
  minHeight: '70vh',
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
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.03)"%3E%3Cpath d="M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z"/%3E%3C/g%3E%3C/svg%3E")',
    pointerEvents: 'none'
  }
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  border: '1px solid rgba(46, 125, 50, 0.2)',
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 0.6s ease-out`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(46, 125, 50, 0.2)',
    border: '1px solid rgba(46, 125, 50, 0.4)',
  }
}));

const FloatingIcon = styled(Box)(({ theme }) => ({
  animation: `${float} 3s ease-in-out infinite`,
}));

const PulseButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  color: 'white',
  padding: '12px 32px',
  borderRadius: '30px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    animation: `${pulse} 0.6s ease-in-out`,
    boxShadow: '0 12px 35px rgba(255, 107, 53, 0.4)',
    transform: 'translateY(-2px)',
  }
}));

const Inicio = () => {
  const servicios = [
    {
      icon: <LocalHospitalIcon sx={{ fontSize: 40, color: '#2e7d32' }} />,
      titulo: 'Consultas Veterinarias',
      descripcion: 'Atención médica integral para tu mascota con profesionales especializados.',
      precio: 'Desde $25.000'
    },
    {
      icon: <VaccinesIcon sx={{ fontSize: 40, color: '#2e7d32' }} />,
      titulo: 'Vacunación',
      descripcion: 'Programa completo de vacunación para mantener protegida a tu mascota.',
      precio: 'Desde $15.000'
    },
    {
      icon: <PetTreatmentIcon sx={{ fontSize: 40, color: '#2e7d32' }} />,
      titulo: 'Cirugías',
      descripcion: 'Procedimientos quirúrgicos con equipos de última tecnología.',
      precio: 'Consultar'
    },
    {
      icon: <EmergencyIcon sx={{ fontSize: 40, color: '#2e7d32' }} />,
      titulo: 'Emergencias 24/7',
      descripcion: 'Atención de urgencias las 24 horas del día, los 365 días del año.',
      precio: 'Disponible'
    }
  ];

  const testimonios = [
    {
      nombre: 'María González',
      comentario: 'Excelente atención. Mi perro Max se sintió muy cómodo durante toda la consulta.',
      rating: 5,
      mascota: 'Max (Golden Retriever)'
    },
    {
      nombre: 'Carlos Rodríguez',
      comentario: 'Profesionales muy capacitados. Salvaron la vida de mi gata Luna.',
      rating: 5,
      mascota: 'Luna (Gato Persa)'
    },
    {
      nombre: 'Ana Martínez',
      comentario: 'Muy recomendado. El trato hacia las mascotas es excepcional.',
      rating: 5,
      mascota: 'Rocky (Bulldog)'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ animation: `${fadeInUp} 0.8s ease-out` }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    mb: 2,
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                  }}
                >
                  Cuidamos a tu mejor amigo
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    mb: 4,
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    lineHeight: 1.4
                  }}
                >
                  Atención veterinaria profesional con amor y dedicación las 24 horas del día
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <PulseButton>
                    <PhoneIcon sx={{ mr: 1 }} />
                    Agendar Cita
                  </PulseButton>
                  <Button
                    variant="outlined"
                    sx={{
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.5)',
                      padding: '12px 32px',
                      borderRadius: '30px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    <EmergencyIcon sx={{ mr: 1 }} />
                    Emergencias
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <FloatingIcon>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 300,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <PetsIcon sx={{ fontSize: 120, color: 'white', opacity: 0.9 }} />
                </Box>
              </FloatingIcon>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Información rápida */}
      <Box sx={{ py: 6, background: 'linear-gradient(45deg, #f1f8e9 0%, #e8f5e8 100%)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <ScheduleIcon sx={{ fontSize: 50, color: '#2e7d32', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#2e7d32' }}>
                  Horarios Flexibles
                </Typography>
                <Typography color="text.secondary">
                  Lun - Vie: 8:00 - 20:00<br />
                  Sábados: 9:00 - 17:00<br />
                  Emergencias 24/7
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <LocationOnIcon sx={{ fontSize: 50, color: '#2e7d32', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#2e7d32' }}>
                  Ubicación Central
                </Typography>
                <Typography color="text.secondary">
                  Av. Principal 123<br />
                  Centro de la Ciudad<br />
                  Fácil acceso y parqueadero
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <FavoriteIcon sx={{ fontSize: 50, color: '#2e7d32', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#2e7d32' }}>
                  +15 Años de Experiencia
                </Typography>
                <Typography color="text.secondary">
                  Miles de mascotas atendidas<br />
                  Equipo profesional certificado<br />
                  Tecnología de vanguardia
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Servicios */}
      <Box sx={{ py: 8, backgroundColor: '#fafafa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 2,
              color: '#2e7d32'
            }}
          >
            Nuestros Servicios
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 6,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Ofrecemos una amplia gama de servicios veterinarios para mantener a tu mascota sana y feliz
          </Typography>
          
          <Grid container spacing={4}>
            {servicios.map((servicio, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AnimatedCard sx={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      {servicio.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2e7d32' }}>
                      {servicio.titulo}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3, minHeight: 60 }}>
                      {servicio.descripcion}
                    </Typography>
                    <Chip
                      label={servicio.precio}
                      sx={{
                        background: 'linear-gradient(135deg, #2e7d32, #43a047)',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    />
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Estadísticas */}
      <Box sx={{ py: 8, background: 'linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%)' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
              color: '#2e7d32'
            }}
          >
            Confían en nosotros
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 1 }}>
                  15+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Años de Experiencia
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 1 }}>
                  5K+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Mascotas Atendidas
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 1 }}>
                  24/7
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Atención de Emergencias
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 1 }}>
                  98%
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Satisfacción del Cliente
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #43a047 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.02)"%3E%3Cpath d="M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/%3E%3C/g%3E%3C/svg%3E")',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 2,
              textShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            ¿Tu mascota necesita atención?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              mb: 4,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            No esperes más. Agenda una cita hoy mismo y dale a tu mejor amigo el cuidado que se merece.
          </Typography>
          <PulseButton sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}>
            <PhoneIcon sx={{ mr: 1 }} />
            Llamar Ahora: (123) 456-7890
          </PulseButton>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.5)',
              padding: '12px 32px',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            Agendar Online
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Inicio;