import React from "react";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useLocation } from "react-router-dom";

//Componentes
import Logo from "../assets/logo.svg";

//Estilos
import "../css/navbar.css";

export default function Navbar(props) {
	const [responsiveNav, setResponsiveNav] = useState(false);
	const [responsiveOverflow, setResponsiveOverflow] = useState(false);

	const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
	/* const [displayHeight, setDisplayHeight] = useState(window.innerHeight); */

	const changeDisplay = () => {
		setDisplayWidth(window.innerWidth);
		/* setDisplayHeight(window.innerHeight); */
	};

	useEffect(() => {
		window.addEventListener("resize", changeDisplay);

		let secondnav = document.getElementById("involucrate-submenu");
		if (displayWidth < 700) {
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
	}, [displayWidth]);

	const showResponsiveNav = () => {
		setResponsiveNav(!responsiveNav);
		setResponsiveOverflow(!responsiveOverflow);
		const navbar = document.getElementById("navbar");

		if (!navbar.classList.contains("navbar-toggle") && !responsiveNav) {
			navbar.classList.toggle("navbar-toggle");
		}

		if (responsiveNav) {
			navbar.classList.toggle("navbar-toggle");
		}

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

	//!Remover los hidden al resize de de la pantalla
	const bodyTag = document.getElementsByTagName("body")[0];
	if (document.getElementById("responsive-mask").classList.contains("toggle_responsive_mask")) {
		bodyTag.style.overflowY = "hidden";
	} else {
		bodyTag.style.overflowY = null; //remover los hidden al resize de de la pantalla
	}

	window.addEventListener("scroll", function () {
		const navbar = document.getElementById("navbar");

		if (navbar !== null) {
			navbar.classList.toggle("navbar-toggle", window.scrollY > 0);
		}
	});

	document.getElementById("responsive-mask").addEventListener("click", function () {
		setResponsiveNav(false);
		setResponsiveOverflow(false);
		document.getElementById("responsive-mask").classList.remove("toggle_responsive_mask");
		document.getElementById("navbar").classList.toggle("navbar-toggle");
	});

	function reload() {
		setResponsiveNav(false);
		setResponsiveOverflow(false);
		document.getElementById("responsive-mask").classList.remove("toggle_responsive_mask");
		document.getElementById("navbar").classList.toggle("navbar-toggle");
		window.scrollTo(0, 0);
	}

	return (
		<nav id="navbar" className="">
			<div id="deploy-navbar-btn" onClick={showResponsiveNav}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
			<ul className="principal_list" style={responsiveNavState()}>
				<li>
					<Link
						to="/login"
						className="nav-brand"
						onClick={() => {
							props.admin();
							reload();
						}}
					>
						<img id="logo" src={Logo} alt="Refugio_San_Nicolas_logo" />
					</Link>
				</li>
				<li>
					<Link to="/" className="nav-element" onClick={reload}>
						Inicio
					</Link>
				</li>
				<li>
					<div id="animales-li" className="nav-element">
						<i id="menu-arrow" className="fab-icon fa fa-chevron-down" aria-hidden="true"></i>
						Animales
						<ul id="animales-submenu">
							<li>
								<Link to="/rescatados" className="submenu-element" onClick={reload}>
									<i className="fas fa-paw"></i>
									Rescatados
								</Link>
							</li>
							<li>
								<Link to="/adoptados" className="submenu-element" onClick={reload}>
									<i className="fas fa-medal"></i>
									Logros
								</Link>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<div id="contacto-li" className="nav-element">
						<i id="menu-arrow" className="fab-icon fa fa-chevron-down" aria-hidden="true"></i>
						Contactanos
						<ul id="contacto-submenu">
							<li>
								<Link to="/contacto" className="submenu-element" onClick={reload}>
									<i className="fas fa-at"></i>
									Consultanos
								</Link>
							</li>
							<li>
								<Link to="/faq" className="submenu-element" onClick={reload}>
									<i className="fa fa-question" aria-hidden="true"></i>
									Preguntas frecuentes
								</Link>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<div id="involucrate-li" className="nav-element">
						<i id="menu-arrow" className="fab-icon fa fa-chevron-down" aria-hidden="true"></i>
						Involucrate
						<ul id="involucrate-submenu">
							<li>
								<Link to="/esfuerzos" className="submenu-element" onClick={reload}>
									<i className="fab-icon fa fa-handshake-o" aria-hidden="true"></i>
									Esfuerzos
								</Link>
							</li>
							<li>
								<Link to="/donativos" className="submenu-element" onClick={reload}>
									<i className="fab-icon fa fa-money" aria-hidden="true"></i>
									Donativos
								</Link>
							</li>
							<li>
								<Link to="/colaboradores" className="submenu-element" onClick={reload}>
									<i className="fab-icon fa fa-users" aria-hidden="true"></i>
									Colaboradores
								</Link>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</nav>
	);
}
