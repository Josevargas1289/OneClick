import logo from "../../assets/logoNavbar.png"
import {
    LinkedinOutlined,
    FacebookOutlined,
    YoutubeOutlined,
    InstagramOutlined
} from "@ant-design/icons"

const Footer = () => {

    return (
        <div className=" flex  w-ful bg-color-icon-branding p-2 h-48 items-center justify-center   ">
            <div className=" w-4/5 flex gap-5 justify-between   ">
                <div className=" text-center   ">
                    <img className="  m-auto w-32" src={logo} alt="" />
                    <p className="font-light text-xs  ">&copy; Derechos reservados 2023</p>

                </div>

                <div className=" flex flex-col ">
                    <h3 className=" hover:text-btm-color font-bold">Acerca</h3>
                    <a className=" hover:text-btm-color font-light  mt-3 text-sm" href="/contacto">Contacto</a>
                    <a className=" hover:text-btm-color font-light   text-sm" href="/team">Team</a>
                    <a className="hover:text-btm-color font-light   text-sm" href="/nosotros">Nosotros</a>

                </div>

                <div className="">
                    <h3 className=" font-bold">Redes</h3>
                    <div className=" flex gap-2 items-center mt-3 ">
                        <a href="https://www.linkedin.com/in/one-click-0b878a297/" target=" _blank"> <LinkedinOutlined className=" text-xl  hover:text-btm-color" /></a>

                        <a href="https://www.facebook.com/people/One-click/61552532168787/?sk=about&locale=es_LA" target=" _blank"> <FacebookOutlined className=" text-xl hover:text-btm-color" /></a>

                        <a href="https://www.youtube.com/channel/UCN5prnGfreDeBsDVbaXph3Q" target=" _blank"><YoutubeOutlined className=" text-xl hover:text-btm-color" /></a>

                        <a href="https://www.instagram.com/idconeclick2023/?fbclid=IwAR3547zZATqLCnR5jcZZSbzf3JycBqFwsGFLQVqjlCwVYJuiWgTOfcne32A" target=" _blank"><InstagramOutlined className=" text-xl hover:text-btm-color" /></a>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Footer;