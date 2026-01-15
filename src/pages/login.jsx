import { useState } from "react";
import "../styles/Login.css";

function Login() {
  // Estados para guardar lo que el usuario escribe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Aquí normalmente enviarías los datos al backend
    console.log("Correo:", email);
    console.log("Contraseña:", password);

    alert("Login enviado (demo)");
  };

  return (
    <div className="login-container">


      {/* Caja del login */}
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Bienvenido</h2>

        {/* Input correo */}
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Input contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Texto de ayuda */}
        <p className="help-text">¿Has olvidado tu contraseña?</p>

        {/* Botón */}
        <button type="submit">Continue</button>

        {/* Registro */}
        <p className="register-text">
          ¿No tienes cuenta? <span>Regístrate</span>
        </p>
      </form>

      {/* Footer */}
      <footer>
        <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default Login;