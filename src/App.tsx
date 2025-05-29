/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/inicio';
import QuienesSomos from './pages/quienesSomos';
import Contacto from './pages/contactanos';
import Error404 from './pages/404';
import Mascotas from './pages/Mascotas';
import Productos from './pages/Productos';
import Clientes from './pages/Clientes';


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/pets" element={<Mascotas />} />
        <Route path="/clients" element={<Clientes />} />
        <Route path="/about" element={<QuienesSomos />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
