import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";


const Contacto = () => {
  
    const onFinish = (values) => {
        console.log("Success:", values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };


    return (
        <div className="bg-bg-contact mt-52 p-10 ">
    <div className=" flex flex-col gap-3 justify-center items-center mb-10">
      <h3 className=" font-poppins font-semibold text-lg lg:text-3xl text-center ">
        Hola
      </h3>
      <span className=" font-poppins text-border-color text-sm">
        Contactanos a traves de nuestros canales, redes sociales, whatsApp, o
        envianos tus requerimientos a traves de este formulario
      </span>
    </div>

    <div className="  flex   justify-center items-center lg:pr-40  w-full overflow-x-hidden  ">
      <Form
        style={{ width: "700px" }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre"
          name="Nombre"
          rules={[
            {
              required: true,
              message: "por favor digite su nombre !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="Apellido"
          rules={[
            {
              required: true,
              message: "Por favor digite su apellido!",
            },
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
              message: "Por favor digite su email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Mensaje">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div className=" flex pl-16  lg:justify-end">
            <button className="  bg-btm-color flex  items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-sm">
              Enviar
            </button>
          </div>
        </Form.Item>
      </Form>
    </div>
  </div>
        
    );
};

export default Contacto;




