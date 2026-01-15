import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import { Cart, Person, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [cartCount] = useState(0);

  return (
    <>
      {/* TOP BAR */}
      <div className={`top-bar ${darkMode ? "dark" : "light"}`}>
        <span>¡Retira GRATIS tus compras en nuestra tienda!</span>

        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>

      {/* HEADER PRINCIPAL */}
      <header className={`header-wrapper ${darkMode ? "dark" : "light"}`}>
        <div className="header-inner">
          {/* LOGO */}
          <Link to="/" className="logo">
            <strong>hipermundo</strong> 🍩
          </Link>

          {/* SEARCH */}
          <Form className="search-bar desktop-only">
           {/*}  <FormControl
              type="search"
              placeholder="Busca los mejores productos y marcas :)"
            />
            <Button variant="primary">
              <Search />
            </Button>*/}
          </Form>

          {/* ACTIONS */}
          <Nav className="header-actions">
            {/* LOGIN */}
            <Nav.Link as={Link} to="/login" className="header-action">
              <Person size={26} />
              <div className="user-text desktop-only">
                <small>Hola!</small>
                <strong>Inicia sesión</strong>
              </div>
            </Nav.Link>

            {/* CART */}
            <Nav.Link
              as={Link}
              to="/cart"
              className="header-action position-relative"
            >
              <Cart size={26} />
              {cartCount > 0 && (
                <Badge pill bg="danger" className="cart-badge">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </div>
      </header>

      {/* CATEGORY MENU */}
      <Navbar className="category-menu navbar-expand-md navbar-light">
        {" "}
        <Container fluid>
          {" "}
          <Nav className="w-100 justify-content-around text-center">
            {" "}
            <Nav.Link className="category-item">
              {" "}
              🎮 <span className="d-none d-md-inline"> Gaming</span>{" "}
            </Nav.Link>{" "}
            <Nav.Link className="category-item">
              {" "}
              💻 <span className="d-none d-md-inline"> Computación</span>{" "}
            </Nav.Link>{" "}
            <Nav.Link className="category-item">
              {" "}
              🧩 <span className="d-none d-md-inline"> Componentes</span>{" "}
            </Nav.Link>{" "}
            <Nav.Link className="category-item">
              {" "}
              📡 <span className="d-none d-md-inline"> Redes</span>{" "}
            </Nav.Link>{" "}
            <Nav.Link className="category-item">
              {" "}
              🏠 <span className="d-none d-md-inline"> Hogar</span>{" "}
            </Nav.Link>{" "}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
