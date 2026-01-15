import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login({ onSuccess }) {
  const navigate = useNavigate();

  // Estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Correo:", email);
    console.log("Contraseña:", password);

    // 👉 aquí iría el login real (API)
    // Si todo sale bien:
    onSuccess();
  };

  return (
    <div className="login-container modal-mode">

      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Bienvenido</h2>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p className="help-text">¿Has olvidado tu contraseña?</p>

        <button type="submit">Continuar</button>

        <p className="register-text">
          ¿No tienes cuenta?{" "}
          <span onClick={() => navigate("/register")}>
            Regístrate
          </span>
        </p>
      </form>

      <footer>
        <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default Login;
