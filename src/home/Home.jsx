import "./Home.css"
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function Home() {

  // ---------- IMAGENES DEL CARRUSEL ----------
  const images = [
    "/img/imagen1.png",
    "/img/imagen2.png",
    "/img/imagen3.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);

  }, []);

  const data = {
    labels: ["Marketing", "Ventas", "Desarrollo", "Soporte"],
    datasets: [
      {
        label: "Distribución",
        data: [30, 25, 25, 20],
        backgroundColor: [
          "#6366f1",
          "#22c55e",
          "#f59e0b",
          "#ef4444"
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="Main_container">

      {/* MENU */}
      <div className="Menus">
        <nav className="navbar">

          <div className="logo">MiWeb</div>

          <ul className="menu">
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Quienes somos</a></li>
            <li><a href="/portfolio">Inicia session</a></li>
            <li><a href="/portfolio">Registrate</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>

        </nav>
      </div>


      {/* CARRUSEL */}
      <div className="carousel">

        <img
          src={images[current]}
          alt="slide"
          className="carousel_image"
        />

      </div>


      {/* ESTADISTICAS */}
      <div className="Statistics">

        <h2>Estadísticas</h2>

        <div className="chart_container">
          <Pie data={data}/>
        </div>

      </div>


      {/* MISION */}
      <div className="Mission">
        mision y vision
      </div>

      <footer>
      </footer>

    </div>
  )
}

export default Home