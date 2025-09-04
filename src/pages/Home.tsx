import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Bienvenido a tu Dashboard</h1>
      <p>Aquí puedes organizar tus tareas, notas y hábitos.</p>

      <div className="cards">
        <div className="card">
          <h2>📝 Tareas</h2>
          <p>Revisa y organiza tus pendientes.</p>
        </div>

        <div className="card">
          <h2>📒 Notas</h2>
          <p>Guarda tus ideas y apuntes.</p>
        </div>

        <div className="card">
          <h2>📊 Hábitos</h2>
          <p>Haz seguimiento a tus rutinas diarias.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
