import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import "./App.css";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
  
      <Footer />
    </>
  );
}

export default App;
