import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function GeneralNavbar() {
	let location = useLocation();

	useEffect(() => {
		const equipo = document.getElementById("equipo");
		const faq = document.getElementById("faq");
		const blogs = document.getElementById("blogs");
		let elements = [equipo, faq, blogs];

		//! Quita el efecto de presión
		elements.map((e) => {
			if (e.classList.contains("active-general-nav")) {
				e.classList.remove("active-general-nav");
			}

			return null;
		});

		//* Añade el efecto de presión
		switch (location.pathname) {
			case "/equipo":
				equipo.classList.add("active-general-nav");
				break;
			case "/faq":
				faq.classList.add("active-general-nav");
				break;
			case "/blogs":
				blogs.classList.add("active-general-nav");
				break;
			default:
				break;
		}
	});

	return (
		<nav className="general-navbar col-12">
			<ul className="row">
				<li className="col-12 col-md-4">
					<Link to="/equipo" id="equipo">
						Equipo
					</Link>
				</li>
				<li className="col-12 col-md-4">
					<Link to="/faq" id="faq">
						Preguntas y respuestas
					</Link>
				</li>
				<li className="col-12 col-md-4">
					<Link to="/blogs" id="blogs">
						Blogs
					</Link>
				</li>
			</ul>
		</nav>
	);
}
