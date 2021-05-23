import React from "react";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useLocation } from "react-router-dom";

//Componentes
import Logo from "../assets/logo.svg";

//Estilos
import "../css/navbar.css";

export default function Navbar() {
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

		let secondnav = document.getElementById("second_nav");
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

	function activeSecondList() {
		//Selectores de elementos y submenus
		const secondnav = document.getElementById("second_nav");
		const menuArrow = document.getElementById("menu-arrow");
		const liSecondnav = document.getElementById("li-secondnav");

		menuArrow.classList.toggle("toggle_arrow");
		liSecondnav.classList.toggle("li_toggle_color");

		if (displayWidth < 700 && responsiveNav === true) {
			secondnav.classList.toggle("responsive_secondary_list");
		} else {
			secondnav.classList.toggle("show_secondary_list");
		}
	}

	//!Remover los hidden al resize de de la pantalla
	const bodyTag = document.getElementsByTagName("body")[0];
	if (document.getElementById("responsive-mask").classList.contains("toggle_responsive_mask")) {
		bodyTag.style.overflowY = "hidden";
	} else {
		bodyTag.style.overflowY = null; //remover los hidden al resize de de la pantalla
	}

	window.addEventListener("scroll", function () {
		const navbar = document.getElementById("navbar");

		navbar.classList.toggle("navbar-toggle", window.scrollY > 0);
	});

	return (
		<nav id="navbar" className="">
			<div id="deploy-navbar-btn" onClick={showResponsiveNav}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
			<ul className="principal_list" style={responsiveNavState()}>
				<li>
					<a href="/" className="nav-brand">
						<img id="logo" src={Logo} alt="Refugio_San_Nicolas_logo" />
					</a>
				</li>
				<li>
					<a href="/" className="nav-element">
						Inicio
					</a>
				</li>
				<li>
					<a href="/animales#/rescatados" className="nav-element">
						Animales
					</a>
				</li>
				<li>
					<a href="/contacto" className="nav-element">
						Contactanos
					</a>
				</li>
				<li>
					<div id="li-secondnav" className="nav-element" onClick={activeSecondList}>
						<i id="menu-arrow" className="fab-icon fa fa-chevron-right" aria-hidden="true"></i>
						Involucrate
					</div>
					<ul id="second_nav">
						<li>
							<a href="/esfuerzos" className="submenu-element">
								<i className="fab-icon fa fa-handshake-o" aria-hidden="true"></i>
								Esfuerzos
							</a>
						</li>
						<li>
							<a href="/donativos" className="submenu-element">
								<i className="fab-icon fa fa-money" aria-hidden="true"></i>
								Donativos
							</a>
						</li>
						<li>
							<a href="/voluntarios" className="submenu-element">
								<i className="fab-icon fa fa-users" aria-hidden="true"></i>
								Voluntarios y asociados
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}
