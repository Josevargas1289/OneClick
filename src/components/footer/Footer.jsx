import logo from "../../assets/logoNavbar.png"
import {
    LinkedinOutlined,
    FacebookOutlined,
    YoutubeOutlined,
    InstagramOutlined
} from "@ant-design/icons"

const Footer = () => {

    return (
        <div className=" flex justify-center w-ful bg-color-icon-web p-2   ">
            <div className=" w-full flex gap-5 items-center justify-center m-4 ">
                <div className=" text-center w-1/3  ">
                    <img className="  m-auto w-32" src={logo} alt="" />
                    <p className=" text-xs text-border-color">&copy; todo los derechos reservados 2023</p>

                </div>

                <div className=" flex flex-col w-1/3">
                    <h3 className=" font-bold">Acerca</h3>
                    <a className="  text-border-color mt-3 text-sm" href="/contacto">Contacto</a>
                    <a className="  text-border-color  text-sm" href="/">Team</a>
                    <a className="  text-border-color text-sm" href="/nosotros">Nosotros</a>

                </div>

                <div className="w-1/3">
                    <h3 className=" font-bold">Redes</h3>
                    <div className=" flex gap-2 items-center mt-3 ">
                        <a href="https://www.linkedin.com/in/one-click-0b878a297/" target=" _blank"> <LinkedinOutlined className=" text-lg text-btm-color" /></a>

                        <a href="https://www.facebook.com/people/One-click/61552532168787/?sk=about&locale=es_LA" target=" _blank"> <FacebookOutlined className=" text-lg text-btm-color" /></a>

                        <a href="https://www.youtube.com/channel/UCN5prnGfreDeBsDVbaXph3Q" target=" _blank"><YoutubeOutlined className=" text-lg text-btm-color" /></a>

                        <a href="https://www.instagram.com/idconeclick2023/?fbclid=IwAR3547zZATqLCnR5jcZZSbzf3JycBqFwsGFLQVqjlCwVYJuiWgTOfcne32A" target=" _blank"><InstagramOutlined className=" text-lg text-btm-color" /></a>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Footer;