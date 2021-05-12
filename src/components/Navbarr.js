import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../css/navbar.css";

export default function Navbar() {
	const [responsiveNav, setResponsiveNav] = useState(false);
	const [responsiveOverflow, setResponsiveOverflow] = useState(false);

	const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
	const [displayHeight, setDisplayHeight] = useState(window.innerHeight);

	const changeDisplay = () => {
		setDisplayWidth(window.innerWidth);
		setDisplayHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener("resize", changeDisplay);

		let secondnav = document.getElementById("second_nav");
		if (displayWidth < 900) {
			secondnav.classList.remove("show_secondary_list");
		} else {
			setResponsiveNav(false);
			setResponsiveOverflow(false);
			document.getElementById("responsive-mask").classList.remove("toggle_responsive_mask");
			secondnav.classList.remove("responsive_secondary_list");
		}

		return () => {
			//Remueve el evento al desmontar la función
			window.removeEventListener("resize", changeDisplay);
		};
	});

	const showResponsiveNav = () => {
		setResponsiveNav(!responsiveNav);
		setResponsiveOverflow(!responsiveOverflow);
		const bodyTag = document.getElementsByTagName("body")[0];
		bodyTag.style.overflowY = responsiveOverflow ? null : "hidden"; //remover los hidden al resize de de la pantalla
		const root = document.getElementById("root");
		root.style.overflowY = responsiveOverflow ? null : "hidden";
		root.style.overflowX = "hidden";
		if (responsiveNav === false) {
			document.getElementById("responsive-mask").classList.add("toggle_responsive_mask");
		} else {
			document.getElementById("responsive-mask").classList.remove("toggle_responsive_mask");
		}
	};

	const responsiveNavState = () => {
		return {
			transform: responsiveNav ? null : "translateX(-105%)",
		};
	};

	const activeSecondList = () => {
		let secondnav = document.getElementById("second_nav");
		document.getElementById("menu-arrow").classList.toggle("toggle_arrow");
		document.getElementById("li-secondnav").classList.toggle("li_toggle_color");

		if (displayWidth < 900 && responsiveNav === true) {
			secondnav.classList.toggle("responsive_secondary_list");
		} else {
			secondnav.classList.toggle("show_secondary_list");
		}
	};

	return (
		<nav id="navbar">
			{displayWidth}
			<div id="deploy-navbar-btn" onClick={showResponsiveNav}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
			<ul className="principal_list" style={responsiveNavState()}>
				<li>
					<a href="algo.html">Inicio</a>
				</li>
				<li>
					<a href="algo.html">Preguntas Frecuentes</a>
				</li>
				<li>
					<a href="algo.html">Novedades</a>
				</li>
				<li>
					<div id="li-secondnav" onClick={activeSecondList}>
						<FontAwesomeIcon id="menu-arrow" className="fab-icon" icon={faChevronRight} />
						Institucional
					</div>
					<ul id="second_nav">
						<li>
							<a href="algo.html">Inscripciones</a>
						</li>
						<li>
							<a href="algo.html">Galeria de imagenes</a>
						</li>
						<li>
							<a href="algo.html">Información Academica</a>
						</li>
						<li>
							<a href="algo.html">Infraestructura</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="algo.html">Contacto</a>
				</li>
				<li>
					<a href="algo.html">Aula Virtual</a>
				</li>
			</ul>
		</nav>
	);
}
