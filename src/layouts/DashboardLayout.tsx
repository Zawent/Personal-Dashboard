import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`dashboard-container ${collapsed ? "collapsed" : ""}`}>
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2 className="dashboard-title">Dashboard</h2>

          {/* Botón para colapsar */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="collapse-btn"
          >
            {collapsed ? "➡" : "⬅"}
          </button>
        </div>

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
