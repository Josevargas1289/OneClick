import { Button, Modal } from "antd";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { SettingOutlined, } from "@ant-design/icons";

const ModalMantenimiento = () => {
  const [modal2Open, setModal2Open] = useState(false);

  const navigate = useNavigate();

  const goweb = () => {
    navigate("/mantenimiento");
  };

  return (
    <>
      <Button
        className=" flex justify-center items-center rounded-md  w-10 p-2 h-10 hover:scale-125"
        type="secundary"
        onClick={() => setModal2Open(true)}
      >
      <SettingOutlined className=" text-3xl text-btm-color" />
      </Button>
      <Modal
        title="¿Mantenimiento?"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <p>
          {" "}
          ¡Confía en nosotros para el mantenimiento! En <span className=" text-btm-color font-bold">One Click</span>, estamos comprometidos a mantener todo funcionando sin problemas. Descubre cómo podemos cuidar de tus sistemas y equipos. ¡Averigua más ahora!
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
export default ModalMantenimiento;
