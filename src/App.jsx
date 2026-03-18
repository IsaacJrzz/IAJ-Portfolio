import React from "react";
import "./index.css"; 
// import ProjectCard from "./ProjectCard"; <--- Comenta esto con // al principio

function App() {
  return (
    <div className="container">
      <h1>Isaac Portfolio</h1>
      <p>¡Funciona! El CSS y React están conectados.</p>
      
      {/* Comenta o borra donde uses el ProjectCard abajo hasta que lo crees */}
      <div className="card">
         <h3>Próximamente</h3>
         <p>Aquí irán mis proyectos cuando cree el archivo ProjectCard.jsx</p>
      </div>
    </div>
  );
}

export default App;