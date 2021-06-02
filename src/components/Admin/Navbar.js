import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faChartPie, faPaw, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.svg";

// Estilos
import "../../css/admin-nav.css";

export default function Navbar() {
	let location = useLocation();
	useEffect(() => {
		const graficos = document.getElementById("graficos");
		const animales = document.getElementById("animales");
		const general = document.getElementById("general");
		const cuenta = document.getElementById("cuenta");
		let elements = [graficos, animales, general, cuenta];

		//! Elimina el borde izquierdo de todas las secciones
		elements.map((e) => {
			if (e.classList.contains("active-page")) {
				e.classList.remove("active-page");
			}

			return null;
		});

		//* Añade el borde izquierdo a la sección que coincida con la ruta
		switch (location.pathname) {
			case "/graficos":
				graficos.classList.add("active-page");
				break;
			case "/animales":
				animales.classList.add("active-page");
				break;
			case "/general/equipo":
				general.classList.add("active-page");
				break;
			case "/cuenta":
				cuenta.classList.add("active-page");
				break;

			default:
				break;
		}
	});

	return (
		<nav className="vertical">
			<a href="/Rasn">
				<img src={Logo} alt="brand-logo" />
			</a>
			<ul>
				<li id="graficos">
					<Link to="/graficos">
						<FontAwesomeIcon className="icon" icon={faChartPie} />
					</Link>
				</li>
				<li id="animales">
					<Link to="/animales">
						<FontAwesomeIcon className="icon" icon={faPaw} />
					</Link>
				</li>
				<li id="general">
					<Link to="/general/equipo">
						<FontAwesomeIcon className="icon" icon={faCog} />
					</Link>
				</li>
				<li id="cuenta">
					<Link to="/cuenta">
						<FontAwesomeIcon className="icon" icon={faUser} />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
