import { Button, Modal } from "antd";
import { useState } from "react";
import iconBranding from "../../assets/icobranding1.png";
import { useNavigate } from "react-router-dom";

const ModalBranding = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const navigate = useNavigate();

  const gobranding = () => {
    navigate("/branding");
  };

  return (
    <>
      <Button
        className=" flex justify-center items-center rounded-md bg-color-icon-branding w-10 p-2 h-10 hover:scale-125"
        type="secundary"
        onClick={() => setModal2Open(true)}
      >
        <img src={iconBranding} alt="" />
      </Button>
      <Modal
        title="¿Que es Branding?"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
       
      >
        <p>
          {" "}
          En Simétrica Dev Studio, el servicio de branding y rebranding es mucho
          más que un simple cambio de imagen. Es una oportunidad emocionante
          para revitalizar y transformar tu marca en algo nuevo y emocionante,
          manteniendo la esencia que la hace única.
        </p>
        <div className=" mt-2 flex justify-end">
          <button
            onClick={gobranding}
            className="  bg-btm-color flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-sm  "
          >
            Ver mas
          </button>
        </div>
        
      </Modal>
    </>
  );
};
export default ModalBranding;
