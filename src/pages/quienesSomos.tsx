import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Chip, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsIcon from '@mui/icons-material/Pets';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';

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

const QuienesSomos = () => {
  const equipo = [
    {
      nombre: 'Dr. Ana Veterinaria',
      especialidad: 'Directora Médica',
      experiencia: '15 años',
      descripcion: 'Especialista en medicina interna y cirugía veterinaria con amplia experiencia en animales domésticos.',
      certificaciones: ['Medicina Interna', 'Cirugía General', 'Emergencias'],
      avatar: 'A'
    },
    {
      nombre: 'Dr. Carlos Sánchez',
      especialidad: 'Cirujano Veterinario',
      experiencia: '12 años',
      descripcion: 'Experto en procedimientos quirúrgicos complejos y traumatología veterinaria.',
      certificaciones: ['Cirugía Especializada', 'Traumatología', 'Ortopedia'],
      avatar: 'C'
    },
    {
      nombre: 'Dra. María López',
      especialidad: 'Dermatóloga Veterinaria',
      experiencia: '10 años',
      descripcion: 'Especializada en enfermedades de la piel y tratamientos dermatológicos avanzados.',
      certificaciones: ['Dermatología', 'Alergias', 'Medicina Preventiva'],
      avatar: 'M'
    },
    {
      nombre: 'Dr. Luis González',
      especialidad: 'Cardiólogo Veterinario',
      experiencia: '8 años',
      descripcion: 'Experto en enfermedades cardiovasculares y diagnóstico por imágenes.',
      certificaciones: ['Cardiología', 'Ecocardiografía', 'Diagnóstico'],
      avatar: 'L'
    }
  ];

  const valores = [
    {
      icon: <FavoriteIcon sx={{ fontSize: 50, color: '#e91e63' }} />,
      titulo: 'Amor por los Animales',
      descripcion: 'Cada mascota es tratada con el amor y cuidado que merece, como si fuera nuestra propia familia.'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 50, color: '#2196f3' }} />,
      titulo: 'Excelencia Profesional',
      descripcion: 'Nos mantenemos actualizados con las últimas técnicas y tecnologías en medicina veterinaria.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 50, color: '#ff9800' }} />,
      titulo: 'Confianza y Transparencia',
      descripcion: 'Construimos relaciones duraderas basadas en la honestidad y comunicación clara.'
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 50, color: '#4caf50' }} />,
      titulo: 'Compromiso Total',
      descripcion: 'Estamos disponibles 24/7 porque entendemos que las emergencias no esperan.'
    }
  ];

  const logros = [
    { numero: '15+', texto: 'Años de Experiencia' },
    { numero: '5,000+', texto: 'Mascotas Atendidas' },
    { numero: '98%', texto: 'Satisfacción del Cliente' },
    { numero: '24/7', texto: 'Atención de Emergencias' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
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
                  Quiénes Somos
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    mb: 2,
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    lineHeight: 1.4
                  }}
                >
                  Más que una veterinaria, somos una familia dedicada al bienestar de tus mascotas
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <FloatingIcon>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 200,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <LocalHospitalIcon sx={{ fontSize: 80, color: 'white', opacity: 0.9 }} />
                </Box>
              </FloatingIcon>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Nuestra Historia */}
      <Box sx={{ py: 8, backgroundColor: '#fafafa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', mb: 3, color: '#2e7d32' }}
              >
                Nuestra Historia
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}
              >
                VetCare+ nació en 2009 del sueño de la Dra. Ana Veterinaria de crear un espacio donde 
                las mascotas fueran tratadas con el mismo amor y dedicación que merecen los miembros 
                de nuestra familia.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}
              >
                Durante más de 15 años, hemos crecido de ser una pequeña clínica a convertirse en 
                el centro veterinario de referencia en la ciudad. Nuestro compromiso siempre ha sido 
                brindar atención médica de excelencia, combinando tecnología de vanguardia con el 
                toque humano que hace la diferencia.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.8 }}
              >
                Hoy, con un equipo de especialistas certificados y equipos de última generación, 
                seguimos fieles a nuestra misión original: cuidar a las mascotas como si fueran nuestras.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%)',
                  textAlign: 'center'
                }}
              >
                <PetsIcon sx={{ fontSize: 80, color: '#2e7d32', mb: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 2 }}>
                  Nuestra Misión
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                  "Proporcionar atención veterinaria integral y compasiva, 
                  creando un ambiente donde las mascotas y sus familias se sientan seguras y amadas."
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Nuestros Valores */}
      <Box sx={{ py: 8, background: 'linear-gradient(135deg, #f1f8e9 0%, #e8f5e8 100%)' }}>
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
            Nuestros Valores
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
            Los principios que guían cada decisión y acción en VetCare+
          </Typography>

          <Grid container spacing={4}>
            {valores.map((valor, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AnimatedCard sx={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      {valor.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2e7d32' }}>
                      {valor.titulo}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {valor.descripcion}
                    </Typography>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Nuestro Equipo */}
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
            Nuestro Equipo
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 6,
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            Profesionales apasionados y altamente capacitados dedicados al cuidado integral de tu mascota
          </Typography>

          <Grid container spacing={4}>
            {equipo.map((miembro, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AnimatedCard sx={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        background: 'linear-gradient(135deg, #2e7d32, #43a047)',
                        color: 'white',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        mx: 'auto',
                        mb: 3
                      }}
                    >
                      {miembro.avatar}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#2e7d32' }}>
                      {miembro.nombre}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 1, fontWeight: 'bold' }}>
                      {miembro.especialidad}
                    </Typography>
                    <Chip
                      label={miembro.experiencia}
                      sx={{
                        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 2
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.5 }}
                    >
                      {miembro.descripcion}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {miembro.certificaciones.map((cert, certIndex) => (
                        <Chip
                          key={certIndex}
                          label={cert}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(46, 125, 50, 0.1)',
                            color: '#2e7d32',
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Logros y Estadísticas */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #43a047 100%)',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            Nuestros Logros
          </Typography>

          <Grid container spacing={4}>
            {logros.map((logro, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 'bold',
                      color: 'white',
                      mb: 1,
                      textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                      fontSize: { xs: '2.5rem', md: '3rem' }
                    }}
                  >
                    {logro.numero}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {logro.texto}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <EmojiEventsIcon sx={{ fontSize: 60, color: '#ffa726', mb: 2 }} />
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Premio a la Excelencia Veterinaria 2023
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default QuienesSomos;