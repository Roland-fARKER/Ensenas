import React, { Fragment, useState, useEffect } from "react";

const Contador = () => {

  const[numero, setNumero] = useState(0);

  const aumentar = () =>{
    setNumero(numero + 1);
  }

  const setear = () =>{
    setNumero(0);
  }

  const decrementar = () =>{
    setNumero(numero > 0 ? numero - 1 : 0);
  }
 
  useEffect(() => {
      document.title = numero === 0 ? "hola" : "clicks: " + numero;
  })

  return (
    <Fragment>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="w-3/5 bg-green-300 h-2/3 flex flex-col justify-center items-center rounded-2xl
                        border-blue-600 border">
                          <h2 className="text-2xl">Contador</h2>
                          <h1 className="text-4xl">{numero}</h1>
                          <button onClick={aumentar} className="bg-blue-400 text-slate-200 m-4 p-4 rounded-3xl
                                              border border-slate-200">incrementar</button>

                          <button onClick={setear} className="bg-blue-400 text-slate-200 m-4 p-4 rounded-3xl
                                              border border-slate-200">setear</button>

                          <button onClick={decrementar} className="bg-blue-400 text-slate-200 m-4 p-4 rounded-3xl
                                              border border-slate-200">disminuir</button>
        </div>
      </div>
    </Fragment>
  );
};


export default Contador;
