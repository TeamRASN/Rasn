import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faChartPie, faPaw, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.svg";

// Estilos
import "../../css/admin-nav.css";

export default function Navbar() {
	let location = useLocation();

	const [responsiveNav, setResponsiveNav] = useState(false);
	const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
	/* const [displayHeight, setDisplayHeight] = useState(window.innerHeight); */

	const changeDisplay = () => {
		setDisplayWidth(window.innerWidth);
		/* setDisplayHeight(window.innerHeight); */
	};

	useEffect(() => {
		// Resize

		window.addEventListener("resize", changeDisplay);

		displayWidth <= 768 && setResponsiveNav(true);
		displayWidth > 768 && setResponsiveNav(false);

		const nav = document.getElementById("navbar-admin");
		const lista = document.getElementById("element-list");
		const logo = document.getElementById("admin-logo");

		function addAndDeleteLogo(arrayDelete, arrayInsert) {
			if (arrayDelete.childNodes.length > 0) {
				arrayDelete.childNodes.forEach((e) => {
					if (e.id.includes("admin-logo")) {
						arrayDelete.removeChild(logo);
					}
				});
				if (!arrayDelete.id.includes("navbar")) {
					arrayInsert.insertBefore(logo, arrayInsert.firstChild);
				} else {
					arrayInsert.insertBefore(logo, arrayInsert.children[2]);
				}
			}
		}

		if (responsiveNav) {
			addAndDeleteLogo(nav, lista);
		} else {
			addAndDeleteLogo(lista, nav);
		}

		// Elementos
		const estadisticas = document.getElementById("estadisticas");
		const animales = document.getElementById("animales");
		const general = document.getElementById("general");
		const cuenta = document.getElementById("cuenta");
		let elements = [estadisticas, animales, general, cuenta];

		//! Elimina el borde izquierdo de todas las secciones
		elements.map((e) => {
			if (e.classList.contains("active-page")) {
				e.classList.remove("active-page");
			}

			return null;
		});

		//* Añade el borde izquierdo a la sección que coincida con la ruta
		switch (location.pathname) {
			case "/estadisticas":
				estadisticas.classList.add("active-page");
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

		return () => {
			//Remueve el evento al desmontar la función
			window.removeEventListener("resize", changeDisplay);
		};
	}, [displayWidth, location.pathname, responsiveNav]);

	return (
		<nav className="navbar-admin" id="navbar-admin">
			<li id="admin-logo">
				<a href="/Rasn">
					<img src={Logo} alt="brand-logo" />
				</a>
			</li>
			<ul id="element-list">
				<li id="estadisticas">
					<Link to="/estadisticas">
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
