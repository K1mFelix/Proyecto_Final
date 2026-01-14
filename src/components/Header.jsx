import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Cart, Person } from "react-bootstrap-icons";
import "../styles/Header.css";


const Header = () => {
  return (
   <>

  {/* TOP BAR */}
  <div className="top-bar">
    ¡Retira GRATIS tus compras en nuestra tienda! Además, aprovecha productos con despacho gratis
  </div>

  {/* HEADER PRINCIPAL */}
  <Navbar className="main-header" variant="dark">
    <Container fluid className="px-4">

      {/* LOGO */}
      <Navbar.Brand href="#">
        <strong>hipermundo</strong>ipermegared🍩
      </Navbar.Brand>

      {/* BUSCADOR */}
      <Form className="d-flex flex-grow-1 mx-4 search-form">
        <FormControl
          type="search"
          placeholder="Busca los mejores productos y marcas :)"
        />
        <Button>🔍</Button>
      </Form>

      {/* ICONOS */}
      <Nav className="header-icons">
        <Nav.Link href="#">
          <Person size={30} />
          <span>Hola!<br />Inicia sesión</span>
        </Nav.Link>

        <Nav.Link href="#">
          <Cart size={30} />
        </Nav.Link>
      </Nav>

    </Container>
  </Navbar>

  {/* MENÚ */}
  <Navbar className="category-menu">
    <Container fluid className="px-4">
      <Nav>
        <Nav.Link>Gaming y Streaming</Nav.Link>
        <Nav.Link>Computación</Nav.Link>
        <Nav.Link>Componentes</Nav.Link>
        <Nav.Link>Conectividad y Redes</Nav.Link>
        <Nav.Link>Hogar y Oficina</Nav.Link>
        <Nav.Link>Audio y Video</Nav.Link>
        <Nav.Link>Otras Categorías</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

</>

  );
};

export default Header;
