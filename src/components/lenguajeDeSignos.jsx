import React from 'react';
import lenguajeDeSeñas from '../assets/lenguajeDeSeñas.png';

const lenguaje = () => {
  return (
    <div>
      <img src={lenguajeDeSeñas} alt="Lenguaje"  className="w-96 max-sm:w-80"/>
    </div>
  );
}

export default lenguaje;