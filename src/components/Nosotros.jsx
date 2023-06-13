import React from 'react';
import Vector3 from "./Vector3"

const Nosotros = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Acerca de nosotros</h2>
        <p className="text-gray-600">Somos una organizacion de jovenes con deseos de apoyar la educacion inclusiva </p>
      </div>
      <Vector3/>
    </div>
  );
}

export default Nosotros;



