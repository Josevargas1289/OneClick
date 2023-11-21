import ReactPlayer from "react-player";
import { FilePdfOutlined  } from '@ant-design/icons';
import ManualdeUso from "../../documents/manuadeusopc.pdf" 


const SoporteService = () => {
  const vidUrl = "https://www.youtube.com/watch?v=ROCIjancUnI";

  return (
    <div className="mt-28 w-full p-10 m-10 lg:p-20 flex flex-col items-center   ">
      <div className=" mb-16">
        <strong className=" text-4xl text-btm-color text-center">
          Nuestro servicio de Soporte
        </strong>
      </div>
      <div>
        <p>
          Cuando se trata de mantener la integridad de tus sistemas, nuestro
          servicio de soporte tecnológico se destaca como tu aliado confiable.
          Nos especializamos en ofrecer soluciones rápidas y efectivas para
          resolver cualquier problema que pueda surgir, asegurando un
          funcionamiento ininterrumpido de tus tecnologías.
        </p>
        <br />
        <strong>Servicios destacados:</strong>
        <br />
        <br />
        <ol className=" list-disc ml-4">
          <li>Asesoramiento Remoto</li>
          <li>Mantenimiento Preventivo</li>
          <li>Formación Personalizada</li>
        </ol>
        <br />
        <a className="text-btm-color mt-4" href={ManualdeUso} download>
            <FilePdfOutlined className=" text-red-color " /> Descarga nuestro manual de uso recomendado
            </a>
      </div>
      <div className=" flex items-start  mt-5 lg:w-full">
        <strong className=" text-1xl lg:text-2xl text-btm-color mb-5">
          Dejamos una guía rapida para formatear tu equipo por si lo necesitas
          en algun momento💣
        </strong>
      </div>
      <div className=" flex justify-start w-80   lg:w-full">
        <ReactPlayer
          url={vidUrl}
          playing={false}
          volume={0.5}
          controls={true}
        />
      </div>
    </div>
  );
};

export default SoporteService;
