import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Crear = () => {
  const handleCrearConsulta = () => {
    alert('Abrir formulario para crear consulta');
  };

  const handleCrearTratamiento = () => {
    alert('Abrir formulario para crear tratamiento');
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />

      <main className="flex-1 px-6 py-10 text-center">
        <h1 className="text-3xl font-bold mb-8">Pets & Health</h1>

        <div className="flex justify-center gap-10 flex-wrap">
          <div
            onClick={handleCrearConsulta}
            className="w-[300px] border-[3px] border-black rounded-[10px] p-8 cursor-pointer shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-4">Crear Consulta</h2>
            <p className="text-gray-700">Cuando des click abre un formulario</p>
          </div>

          <div
            onClick={handleCrearTratamiento}
            className="w-[300px] border-[3px] border-black rounded-[10px] p-8 cursor-pointer shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-4">Crear Tratamiento</h2>
            <p className="text-gray-700">Cuando des click abre un formulario</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Crear;
