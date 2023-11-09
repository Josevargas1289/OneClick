import { Button, Modal } from "antd";
import { useState } from "react";
import { WechatOutlined, } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

const ModalSoporte = () => {
  const [modal2Open, setModal2Open] = useState(false);

  const navigate = useNavigate();

  const gosoporte = () => {
    navigate("/soporte");
  };

  return (
    <>
      <Button
        className=" flex justify-center items-center rounded-md  w-10 p-2 h-10 hover:scale-125"
        type="secundary"
        onClick={() => setModal2Open(true)}
      >
          <WechatOutlined className=" text-3xl text-btm-color" />
      </Button>
      <Modal
        title="¿Soporte?"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <p>
          {" "}
          ¡Simplifica tu vida con <span className=" text-btm-color font-bold">One Click!</span> Ofrecemos soluciones de soporte excepcionales que te permiten concentrarte en lo que más importa. Descubre cómo podemos hacer que tus desafíos desaparezcan con solo un clic.
        </p>
        <div className=" mt-2 flex justify-end">
          <button
            onClick={gosoporte}
            className="  bg-btm-color flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-sm "
          >
            Ver mas
          </button>
        </div>
      </Modal>
    </>
  );
};
export default ModalSoporte;
