import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Inicio = () => {
  const fechaHoy = new Date().toLocaleDateString();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />

      <main className="flex-1 px-6 py-10 text-center">
        <h2 className="text-3xl font-bold mb-2">Bienvenido a Pets & Health</h2>
        <p className="text-gray-700 mb-8">(Fecha: {fechaHoy})</p>

        <div className="flex justify-center gap-10 flex-wrap">
          <section className="w-[300px] border-[3px] border-black rounded-[10px] p-8 shadow">
            <h3 className="text-xl font-semibold mb-2">Vacunas / Tratamiento</h3>
            <p className="text-gray-700">Aquí se mostrará las vacunas que se acercan.</p>
          </section>

          <section className="w-[300px] border-[3px] border-black rounded-[10px] p-8 shadow">
            <h3 className="text-xl font-semibold mb-2">Consultas</h3>
            <p className="text-gray-700">Aquí se muestra las consultas que hay en el día.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inicio;
