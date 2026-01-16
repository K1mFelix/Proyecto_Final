/**
 * AuthContext.jsx
 * ----------------------------------------------------------------------
 * Este archivo define el CONTEXTO DE AUTENTICACIÓN de la aplicación.
 *
 * OBJETIVO PRINCIPAL:
 * - Centralizar el estado del usuario autenticado.
 * - Permitir saber en cualquier parte de la app si el usuario:
 *    - Está logueado
 *    - Qué rol tiene (admin, sales, buyer)
 *    - Qué información básica posee
 *
 * ¿POR QUÉ USAR CONTEXT?
 * - Evita pasar props innecesarias entre componentes.
 * - Permite que Header, rutas, carrito y vistas privadas
 *   reaccionen automáticamente al login / logout.
 *
 * ----------------------------------------------------------------------
 * ESTRUCTURA GENERAL:
 *
 * - AuthContext:
 *   Contexto creado con createContext que almacenará:
 *     - user  → información del usuario autenticado
 *     - login → función para iniciar sesión
 *     - logout → función para cerrar sesión
 *
 * - AuthProvider:
 *   Componente proveedor que envuelve la aplicación completa
 *   (normalmente en App.jsx o main.jsx).
 *
 * ----------------------------------------------------------------------
 * FLUJO DE AUTENTICACIÓN:
 *
 * 1️⃣ Al cargar la aplicación:
 *   - Se ejecuta useEffect().
 *   - Se revisa si existe un usuario guardado en localStorage.
 *   - Si existe, se restaura el estado `user`.
 *   - Esto evita que el usuario se desloguee al refrescar la página.
 *
 * 2️⃣ Login:
 *   - La función login recibe un objeto de usuario completo.
 *   - Guarda el usuario en localStorage.
 *   - Actualiza el estado global `user`.
 *   - Automáticamente el Header, menú y rutas cambian.
 *
 * 3️⃣ Logout:
 *   - Elimina el usuario del localStorage.
 *   - Limpia el estado `user`.
 *   - La aplicación vuelve al estado de usuario no autenticado.
 *
 * ----------------------------------------------------------------------
 * FORMATO ESPERADO DEL USUARIO:
 *
 * {
 *   id: number | string,
 *   name: string,
 *   email: string,
 *   role: "admin" | "sales" | "buyer",
 *   token?: string
 * }
 *
 * ----------------------------------------------------------------------
 * SEGURIDAD (IMPORTANTE):
 * - Este contexto NO reemplaza la seguridad del backend.
 * - El localStorage es solo para persistencia de sesión.
 * - En producción, el backend debe validar tokens (JWT).
 *
 * ----------------------------------------------------------------------
 * USO EN COMPONENTES:
 *
 * const { user, login, logout } = useAuth();
 *
 * - user === null → usuario NO autenticado
 * - user !== null → usuario autenticado
 *
 * ----------------------------------------------------------------------
 * ESCALABILIDAD:
 * - Se pueden agregar permisos por rol.
 * - Se puede integrar con API REST o GraphQL.
 * - Compatible con protección de rutas privadas.
 * ----------------------------------------------------------------------
 */


import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  
  // Cargar usuario desde localStorage al refrescar
  
  useEffect(() => {
  
    const storedUser = localStorage.getItem("user");
  
    if (storedUser) {
  
      setUser(JSON.parse(storedUser));
  
    }
  }, []);

  
  
  // Login (recibe usuario completo)
  
  const login = (userData) => {
  
    localStorage.setItem("user", JSON.stringify(userData));
  
    setUser(userData);
  };

  
  
  // Logout
  
  const logout = () => {
  
    localStorage.removeItem("user");
  
    setUser(null);
  };

  
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook de acceso al contexto
export const useAuth = () => useContext(AuthContext);
