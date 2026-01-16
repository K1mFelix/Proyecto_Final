import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Products from "./pages/products";
import CreateUser from "./pages/CreateUser";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* RUTAS PÚBLICAS */}
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />

        {/* REGISTRO SOLO ADMIN */}
        <Route
          path="/createUser"
          element={
            <PrivateRoute roles={["admin"]}>
              <CreateUser />
            </PrivateRoute>
          }
        />

        {/* PRODUCTOS (ADMIN / SALES / BUYER) */}
        <Route
          path="/products"
          element={
            <PrivateRoute roles={["admin", "sales", "buyer"]}>
              <Products />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
