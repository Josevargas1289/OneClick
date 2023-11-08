// importaciones
import { useNavigate } from "react-router-dom";
import imgsection1 from "../../assets/imgbannerprincipal.png"
import imgWebsection1 from "../../assets/website1.png"
import imgSoporteSection1 from "../../assets/coding1.png"
import imgMantenimientoSection1 from "../../assets/icobranding1.png"




const Section1 = () => {

    // codigo js
    const navigate = useNavigate();

    const irContacto = () => {
        navigate("/contacto")
    }


    return (
        // html
        <div className=" pt-44 p-10 ">
            <section className=" flex flex-col lg:flex-row xl:flex-row  items-center">
                <div className=" flex flex-col gap-4 w-full lg:w-2/3">
                    <h1 className=" text-lg font-bold">Expertos en desarrollo <span className=" text-primary">Web, mantenimiento e  infraestructura <br /> tecnologíca</span></h1>

                    <p>Bienvenido a One Click, Tu socio estratégico en desarrollo web y mantenimiento de computadores, ofreciendo soluciones creativas y personalizadas para destacar en el mundo digital, incluyendo servicios especializados en infraestructura tecnologíca.</p>

                    <button
                        onClick={irContacto}
                        className=" bg-btm-color flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-md"
                    >
                        Contacto
                    </button>

                </div>
                <div>
                    <img className=" w-64" src={imgsection1} alt="" />
                </div>


            </section>
            <div className=" p-10 flex flex-col lg:flex-row xl:flex-row  lg:gap-20 xl:gap-20">
                <div className=" flex mt-14 gap-3">
                    <div>
                        <img src={imgWebsection1} alt="" />
                    </div>
                    <div>
                        <h1 className=" font-bold">Desarrollo web</h1>
                        <p>Soluciones digitales</p>
                    </div>
                </div>

                <div className=" flex mt-14 gap-3">
                    <div>
                        <img src={imgSoporteSection1} alt="" />
                    </div>
                    <div>
                        <h1 className=" font-bold">Soporte</h1>
                        <p>Redirige tus proyectos</p>
                    </div>
                </div>

                <div className=" flex mt-14 gap-3">
                    <div>
                        <img src={imgMantenimientoSection1} alt="" />
                    </div>
                    <div>
                        <h1 className=" font-bold">Mantenimiento</h1>
                        <p>Conserva tu tecnología</p>
                    </div>
                </div>
                


            </div>
           <hr />


        </div>
    )

};
export default Section1;

