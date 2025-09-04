import { Outlet, Link } from "react-router-dom";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2 className="dashboard-title">Dashboard</h2>
        <nav className="dashboard-nav">
          <Link to="/">Inicio</Link>
          <Link to="/tasks">Tareas</Link>
          <Link to="/notes">Notas</Link>
          <Link to="/habits">Hábitos</Link>
        </nav>

        {/* Botón modo oscuro */}
        <button onClick={toggleDarkMode} className="dashboard-toggle">
          Toggle Dark
        </button>
      </aside>

      {/* Main */}
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
}
