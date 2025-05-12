import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Paciente from './pages/Paciente';
import Crear from './pages/Crear';
import Navbar from './components/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/paciente" element={<Paciente />} />
        <Route path="/crear" element={<Crear />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
