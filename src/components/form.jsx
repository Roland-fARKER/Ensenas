import { useEffect, useState } from "react";
import { GuardarComentario, getComentarios } from "./API";
import Vector3 from "./Vector3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {

  const notify = () => toast.success
  ("Gracias por tus comentarios");

  const [Nombre, setNombre] = useState(null);
  const [Comentario, setComentario] = useState(null);

  const guardarComentario = (e) => {
    e.preventDefault();
    GuardarComentario(Nombre, Comentario);
    console.log(Nombre + Comentario);
    notify();
  };

  const [com, setCom] = useState(null);

  useEffect(() => {
    getComentariosData();
  }, []);
  const getComentariosData = async () => {
    const c = await getComentarios();
    console.log(c.docs[0].data());
    setCom(c.docs);
  };

  return (
    <>
      <ToastContainer/>
      <div className=" w-ful bg-gray-800 flex flex-col 
        items-center">
        <h1 className=" text-center text-2xl text-white my-6 max-sm:px-2">
          Evalúa nuestra idea y ayudanos a mejorar!
        </h1>
        <form className=" max-sm:w-2/3 justify-center">
          <label className=" block uppercase text-white text-base font-bold mb-2">
            Tu Nombre
          </label>

          <input
            type="name"
            name="email"
            id="email"
            className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
            placeholder=" "
            required
            onChange={(e) => setNombre(e.target.value)}
          />
          <label className="block uppercase my-3 text-white text-base font-bold mb-2">
            Tu Comentario
          </label>
          <textarea
            maxlength="300"
            name="feedback"
            id="feedback"
            rows="4"
            cols="80"
            className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
            placeholder=""
            required
            onChange={(e) => setComentario(e.target.value)}
          ></textarea>
          <button
            className=" bg-blue-400 rounded-2xl px-7 py-3 my-2 text-white text-lg
                                 hover:bg-blue-800"
            onClick={guardarComentario}
          >
    
            Enviar
          </button>
        </form>
      </div>
      <section className=" flex items-center justify-center bg-blue-400">
      
       <div >
            {
                com?.map((c) =>(
                    <div className=" bg-slate-200 my-4 w-auto mx-2 px-2 rounded-2xl">
                        <h1 className=" text-blue-600">{c.data().Nombre}</h1>
                        <p>{c.data().Comentario}</p>
                    </div>))
            }
        </div>
        <Vector3/>
      </section>
    </>
  );
};

export default Form;
