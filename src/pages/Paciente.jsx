import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Paciente = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />

      <main className="flex-1 px-6 py-10">
        <h1 className="text-3xl text-center font-bold mb-6">Pacientes</h1>

        <div className="flex flex-col items-center mb-8">
          <label htmlFor="busqueda" className="mb-2 text-lg font-medium">
            Buscar por nombre:
          </label>
          <input
            type="text"
            id="busqueda"
            placeholder="Escribe un nombre..."
            className="px-4 py-2 border border-gray-300 rounded-md w-64"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg shadow p-4 text-center hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">Paciente {i + 1}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Paciente;
