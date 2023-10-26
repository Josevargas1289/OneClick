import { Button, Modal } from "antd";
import { useState } from "react";
import icondesarrolloweb from "../../assets/website1.png";
import { useNavigate } from "react-router-dom";

const ModalDesarrolloWeb = () => {

  const [modal2Open, setModal2Open] = useState(false);

  const navigate = useNavigate();

  const goweb = () => {
    navigate("/desarrollo");
  };

  return (
    <>
      <Button
        className=" flex justify-center items-center rounded-md bg-color-icon-branding w-10 p-2 h-10 hover:scale-125"
        type="secundary"
        onClick={() => setModal2Open(true)}
      >
        <img src={icondesarrolloweb} alt="" />
      </Button>
      <Modal
        title="¿Que es desarrollo web?"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <p>
          {" "}
          En Simétrica Dev Studio, nuestro servicio de desarrollo web es mucho
          más que un sitio en línea. Es una emocionante oportunidad para
          revitalizar tu presencia digital, manteniendo lo que te hace único..
        </p>
        <div className=" mt-2 flex justify-end">
          <button
            onClick={goweb}
            className="  bg-btm-color flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-sm mt-3 "
          >
            Ver mas
          </button>
        </div>
      </Modal>
    </>
  );
};
export default ModalDesarrolloWeb;
