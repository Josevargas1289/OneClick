import { useState } from "react";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logoNavbar.png";
import { Link, useNavigate } from "react-router-dom";
import "../navbar/styled.css";

const Nabvar = () => {
  const [expanded, setExpanded] = useState(false);
  console.log(expanded);

  const closeMenu = () => {
    setExpanded(expanded ? false : "expanded");
  };

  const toggleChange = () => {
    setExpanded(false);
  };

  const navigate = useNavigate();

  const goContacto = () => {
    toggleChange();
    navigate("/contacto");
  };

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      collapseOnSelect
      expand="lg"
      className=" bg-white    border "
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img className=" w-36 lg:ml-5 xl:ml-5" src={logo} alt="" />
        </Navbar.Brand>

        <NavbarToggle className="border-none shadow-none " onClick={closeMenu}>
          {!expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </NavbarToggle>

        <Navbar.Collapse
          id="responsive-navbar-nav  "
          className="h-screen sm:h-screen md:h-0 lg:h-0 gap-12 "
        >
          <Nav className=" flex w-full  justify-end gap-10  mt-10 sm:mt-0 md:mt-0 lg:mt-0-md:mt-0  ">
            <Nav.Link
              as={Link}
              onClick={toggleChange}
              to={"/"}
              className="text-black font-poppins text-md "
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={toggleChange}
              as={Link}
              to={"/nosotros"}
              className="text-black font-poppins text-md "
            >
              Nosotros
            </Nav.Link>
            <NavDropdown
              title="Servicios"
              id="collasible-nav-dropdown"
              className=" mr-0 lg:mr-32-md:mr-32  font-poppins text-md   "
            >
              <NavDropdown.Item
                as={Link}
                onClick={toggleChange}
                to={"/desarrollo"}
                className="font-poppins text-sm"
              >
                Desarrollo web
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                onClick={toggleChange}
                to={"/desarrolloMovil"}
                className="font-poppins text-sm"
              >
                Desarrollo movíl
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                onClick={toggleChange}
                to={"/branding"}
                className="font-poppins text-sm"
              >
                Branding
              </NavDropdown.Item>
            </NavDropdown>
            <button
              onClick={goContacto}
              className=" bg-btm-color flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-md"
            >
              Contacto
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nabvar;

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />
</svg>;
