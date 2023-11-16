import { Form, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import logo from "../../assets/logoNavbar.png";

const Contacto = ({ message, setMessage }) => {
  const [form] = Form.useForm();
  const [editableMessage, setEditableMessage] = useState(message);

  useEffect(() => {
    setEditableMessage(message);
  }, [message]);

  const onFinish = (values) => {
    const emailJsParams = {
      serviceId: "service_tg99i8a",
      templateId: "template_5zxiiqh",
      userId: "CRE3LzlrHTqCo-iUX",
    };

    const emailData = {
      ...values,
      mensaje: editableMessage || values.mensaje,
      to_name: "One Click",
      from_name: `${values.Nombre} ${values.Apellido}`,
      user_email: values.email,
    };

    emailjs
      .send(
        emailJsParams.serviceId,
        emailJsParams.templateId,
        emailData,
        emailJsParams.userId
      )
      .then(() => {
        Swal.fire({
          title: "Mensaje enviado",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        // console.log("Correo enviado con éxito:", response);
        form.resetFields(); // Limpiamos todos los campos del formulario
        setEditableMessage("");
      })
      .catch(() => {
        Swal.fire({
          title: "Error",
          text: "su mensaje no se envio",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        // console.error("Error al enviar el correo:", error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const clean = () => {
    setMessage(null);
  };

  return (
    <div className="bg-bg-contact mt-20 p-10 flex flex-col items-center border-b border-border-color">
      <img src={logo} alt="" />
      <div className="mb-10">
        <h3 className="font-poppins font-semibold text-lg lg:text-3xl text-center">
          Hola
        </h3>
        <span className="font-poppins text-sm">
          Contáctanos a través de nuestros canales, redes sociales, WhatsApp,{" "}
          <br /> o envíanos tus requerimientos a través de este formulario
        </span>
      </div>

      <div className="w-full max-w-md">
        <Form
          form={form}
          name="basic"
          initialValues={{
            mensaje: editableMessage,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Nombre"
            name="Nombre"
            rules={[
              { required: true, message: "¡Por favor, ingresa tu nombre!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Apellido"
            name="Apellido"
            rules={[
              { required: true, message: "¡Por favor, ingresa tu apellido!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "¡Por favor, ingresa tu correo electrónico!",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Mensaje" name="mensaje">
            <TextArea
              rows={4}
              value={editableMessage}
              onChange={(e) => setEditableMessage(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <div className=" ml-20 lg:flex justify-end">
              <Button
                onClick={clean}
                type="primary"
                htmlType="submit"
                className="bg-btm-color flex items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-sm"
              >
                Enviar
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contacto;
