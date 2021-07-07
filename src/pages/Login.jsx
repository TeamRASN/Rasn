import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Componentes
import Arrow from "../assets/iconos/login-arrow.svg";
import DogIcon from "../assets/iconos/dog.svg";
import ManteinmentIcon from "../assets/iconos/manteinment.svg";
import StatsIcon from "../assets/iconos/stats.svg";
import WritingIcon from "../assets/iconos/writing.svg";

// Estilos
import "../css/login.css";
import { useState } from "react";

export default function Login() {
	//* Estado correspondiente al tamaño de la lista de la animación
	const [iconListWidth, setIconListWidth] = useState(0);

	//? Cambia el estado de iconListWidth por el tamaño del ancho de la lista que contiene los iconos de la animación
	const changeIconListWidth = () => {
		const listIcons = document.getElementById("icon-list");
		setIconListWidth(listIcons.clientWidth);
	};

	useEffect(() => {
		//* changeIconListWidth() Se encarga de aplicar la animacióon slideshow a la lista de iconos
		changeIconListWidth();

		//* Consigue el ancho restante del contenedor para centrar el icono y que ocupe todo el espacio de la lista, creando un contenedor con 4
		//* iconos que cuadripliquen el espacio original del contenedor original.
		let totalWidth = iconListWidth - 100;
		let realWidth = totalWidth / 2;
		const iconos = document.querySelectorAll(".animation-icon");

		//? Aplica el espacio restante como márgenes a cada uno de los elementos de la animación
		iconos.forEach((e) => {
			e.style.margin = `0px ${realWidth}px`;
		});

		//? Aplica al contenedor una animación con keyframes para que se mueva de izquierda a derecha alternando entre cada extremo
		const listIcons = document.getElementById("icon-list");
		listIcons.animate(
			[
				{
					transform: `translateX(0px)`,
					offset: 0,
				},
				{
					transform: `translateX(0px)`,
					offset: 0.05,
				},
				{
					transform: `translateX(-${iconListWidth}px)`,
					offset: 0.33,
				},
				{
					transform: `translateX(-${iconListWidth * 2}px)`,
					offset: 0.66,
				},
				{
					transform: `translateX(-${iconListWidth * 3}px)`,
					offset: 0.95,
				},
				{
					transform: `translateX(-${iconListWidth * 3}px)`,
					offset: 1,
				},
			],
			{
				duration: 15000,
				fill: "forwards",
				delay: -2750,
				direction: "alternate",
				easing: "ease-in-out",
				iterations: Infinity,
			}
		);

		return () => {
			//Remueve el evento al desmontar la función
			window.removeEventListener("resize", changeIconListWidth);
		};
	}, [iconListWidth]);

	return (
		<div className="login-page">
			<div className="login-content">
				<div className="container row">
					<div className="login-card-container col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
						<div className="image-login-container">
							<div className="illustration-container">
								<div className="animated-image" id="icon-list">
									<img className="animation-icon dogIcon" src={DogIcon} alt="Dog Icon" />
									<img
										className="animation-icon manteinmentIcon"
										src={ManteinmentIcon}
										alt="Manteinment Icon"
									/>
									<img className="animation-icon statsIcon" src={StatsIcon} alt="Stats Icon" />
									<img className="animation-icon writingIcon" src={WritingIcon} alt="Writing Icon" />
								</div>
							</div>
							<img className="arrow-separator" src={Arrow} alt="" />
						</div>
						<div className="inputs-container">
							<form method="post" className="row new-register-form login-form">
								<div className="register-input-field col-12">
									<input
										className="input"
										type="text"
										name="email"
										placeholder="Correo electrónico"
										required
									/>
								</div>
								<div className="register-input-field col-12">
									<input
										className="input"
										type="text"
										name="contraseña"
										placeholder="Contraseña"
										required
									/>
								</div>
								<label>
									<input type="checkbox" name="remember-login" className="remember-login" />
									Recordarme en este dispositivo
								</label>
								<div className="submit-btn">
									<Link to="/admin/estadisticas">Iniciar Sesión</Link>
								</div>
								<div className="cancel-btn">
									<a href="/Rasn">Volver</a>
								</div>
								<p className="register-advice">
									¿AÚN NO TENÉS TU CUENTA ADMINISTRATIVA?
									<span>
										<a href="/">SOLICITÁ UNA</a>
									</span>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
