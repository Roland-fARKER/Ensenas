import SVGComponent1 from "./vector1";
import SVGComponent2 from "./vector2";
import Iasvg from "./IAsvg";
import Lenguaje from "./lenguajeDeSignos";
import Form from "./form"

const Body = () =>{
    return(
        <>
            <div className="w-full flex items-center
                        my-4 justify-around 
                         rounded-3xl p-5 max-sm:flex-col xl:px-96">
                <SVGComponent1/>
                <h1 className=" text-gray-800 text-4xl max-sm:text-3xl text-center">La comunicación nunca fué tan fluida</h1>
            </div>
            <section className=" bg-gray-800 w-full h-1/2 my-7
                                    flex items-center justify-around max-sm:flex-col xl:px-96">
                
                <div className=" w-60 max-sm:w-80 xl:w-96">
                    <h1 className=" text-white text-3xl my-4 text-center">Qué hacemos?</h1>
                    <hr></hr>
                    <p className=" text-white text-lg my-3 text-justify">
                        Desarrollamos una app de videoconfrencias
                        para facilitar la comunicación cuando trabajamos o 
                        estudiamos con compañeros que se expresan en 
                        lenguaje de señas.
                    </p>
                </div>
                <SVGComponent2/>
            </section>
            <section className="w-full h-1/2 my-7
                                flex items-center justify-around max-sm:flex-col-reverse
                                xl:px-96">
                <Iasvg/>
                <div className=" w-60 max-sm:w-80 xl:w-96">
                    <h1 className=" text-gray-800 text-3xl my-4 text-center">Cómo lo hacemos?</h1>
                    <hr className=" bg-gray-800"></hr>
                    <p className=" text-gray-800 text-lg my-3 text-justify">
                        Incorporamos un modelo de inteligencia artificial
                        que se encarga de traducir nuestros mensajes orales 
                        a lenguje de señas meidiante una avatar virtual
                        para que nuestros compañeros puedan captar de manera 
                        clara nuestros mensajes.
                    </p>
                </div>
            </section>
            <section className="w-full h-1/2 my-7
                                flex items-center justify-around max-sm:flex-col
                                xl:px-96">
    
                <div className=" w-60 max-sm:w-80 xl:w-96">
                    <h1 className=" text-gray-800 text-3xl my-4 text-center">Ellos también pueden expresarse libremente</h1>
                    <hr className=" bg-gray-800"></hr>
                    <p className=" text-gray-800 text-lg my-3 text-justify">
                        Enseñas tambien permite que nuestros compañeros
                        se expresen libremente atraves de lenguaje de señas
                        y nuestro modelo de inteligencia artificial se encarga de 
                        traducirnos a texto o audio.
                    </p>
                </div>
                <Lenguaje/>
            </section>
            <section className="w-full h-1/2 bg-blue-400 p-4
                                flex-col items-center justify-center
                                xl:px-96" >
                <h1 className=" text-white text-center text-2xl">Enseñas</h1>

                <h2 className=" text-white text-center text-lg" >"Derribando barreras, construyendo igualdad"</h2>
                <h2 className=" text-white text-center text-2xl my-5" >Entérate de más noticias Pronto...</h2>
            </section>
            <Form/>
        </>
       
    );
}

export default Body;