import React from "react";
import { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

//Componenetes
import Rescatados from "../components/Mascotas/Rescatados";
import Adoptados from "../components/Mascotas/Adoptados";
import Dog from "../assets/Dog.jpg";

//Estilos
import "../css/mascotas.css";

export default function Mascotas() {
	// eslint-disable-next-line no-unused-vars
	const [showPopup, setShowPopup] = useState(false);
	const [rescatadosPage, setRescatadosPage] = useState(true);

	// eslint-disable-next-line no-unused-vars
	const changePopup = () => {
		console.log("queondapaaaaa");
	};

	/* function hola() {
		const overlay = document.getElementById("overlay");
		const popup = document.getElementById("popup");
		if (showPopup) {
			overlay.classList.add("active");
			popup.classList.add("active");
		} else {
			overlay.classList.remove("active");
			popup.classList.remove("active");
		}
	} */

	const toggleHeadColor = (page) => {
		if ((page === "AR" && rescatadosPage === true) || (page === "AD" && rescatadosPage === false)) {
		} else {
			setRescatadosPage(!rescatadosPage);
		}
	};

	let FirstHeadColor = rescatadosPage ? "activeHead" : "";
	let SecondHeadColor = rescatadosPage ? "" : "activeHead";

	return (
		<main className="Mascotas">
			<div className="container">
				<Router>
					<div className="secciones">
						<Link to="/rescatados">
							<h1 onClick={() => toggleHeadColor("AR")} className={FirstHeadColor}>
								RESCATADOS
							</h1>
						</Link>
						<Link to="/adoptados">
							<h1 onClick={() => toggleHeadColor("AD")} className={SecondHeadColor}>
								ADOPTADOS
							</h1>
						</Link>
					</div>
					<Route path="/rescatados">
						<Rescatados />
					</Route>
					<Switch>
						<Route path="/adoptados" component={Adoptados} />
					</Switch>
				</Router>
				{/* <Rescatados popup={changePopup} /> */}
			</div>

			<div className="overlay" id="overlay">
				<div className="popup" id="popup">
					<div className="img" style={{ backgroundImage: { Dog } }}></div>
					<div className="info-section">
						<div className="container-text">
							<h1>Mia</h1>
							<div className="descripcion row">
								<div className="renglon col-12 col-md-6">
									<h4>Sexo:</h4>
									<p>Femenino</p>
								</div>
								<div className="renglon col-12 col-md-6">
									<h4>Peso:</h4>
									<p>10kg</p>
								</div>
								<div className="renglon col-12 col-md-6">
									<h4>Nacimiento:</h4>
									<p> 12/03/2018</p>
								</div>
								<div className="renglon col-12 col-md-6">
									<h4>Edad:</h4>
									<p>5 años</p>
								</div>
								<div className="renglon col-12 col-md-6">
									<h4>Raza:</h4>
									<p>Europeo común</p>
									<br />
								</div>
								<div className="renglon col-12 col-md-6">
									<h4>Tamaño:</h4>
									<p>Pequeño</p>
								</div>
								<div className="renglon col-12 aptitud">
									<h4>Pelaje:</h4>
									<p>Blanco con manchas marrones</p>
								</div>
								<div className="renglon col-12  aptitud">
									<h4>Aptitud: </h4>
									<p>Le gusta jugar mucho, hinchar las bolas y es super arisca.</p>
								</div>
							</div>
							<a className="btn-adoptar" href="/mascotas/adoptar">
								Adoptar
							</a>
							<a href="/" id="btn-cerrar-popup1" className="btn-cerrar-popup">
								<i className="fas fa-times"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="grid-container">
					<div className="item_equipo">
						<div className="foto_integrante">
							<img src={Mia} alt="" />
						</div>
						<div className="informacion_mascota">
							<h4 className="nombre_integrante">Mia</h4>
							<button
								id="btn-abrir-popup<?php echo $id?>"
								className="btn-abrir-popup"
								onclick="openPopup(<?php echo $id?>)"
							>
								Ver más
							</button>
						</div>
					</div>

					<div className="item_equipo">
						<div className="foto_integrante">
							<img src={Mia} alt="" />
						</div>
						<div className="informacion_mascota">
							<h4 className="nombre_integrante">Mia</h4>
							<button
								id="btn-abrir-popup<?php echo $id?>"
								className="btn-abrir-popup"
								onclick="openPopup(<?php echo $id?>)"
							>
								Ver más
							</button>
						</div>
					</div>

					<div className="item_equipo">
						<div className="foto_integrante">
							<img src={Mia} alt="" />
						</div>
						<div className="informacion_mascota">
							<h4 className="nombre_integrante">Mia</h4>
							<button
								id="btn-abrir-popup<?php echo $id?>"
								className="btn-abrir-popup"
								onclick="openPopup(<?php echo $id?>)"
							>
								Ver más
							</button>
						</div>
					</div>

					<div className="item_equipo">
						<div className="foto_integrante">
							<img src={Mia} alt="" />
						</div>
						<div className="informacion_mascota">
							<h4 className="nombre_integrante">Mia</h4>
							<button
								id="btn-abrir-popup<?php echo $id?>"
								className="btn-abrir-popup"
								onclick="openPopup(<?php echo $id?>)"
							>
								Ver más
							</button>
						</div>
					</div>

					<div className="item_equipo">
						<div className="foto_integrante">
							<img src={Mia} alt="" />
						</div>
						<div className="informacion_mascota">
							<h4 className="nombre_integrante">Mia</h4>
							<button
								id="btn-abrir-popup<?php echo $id?>"
								className="btn-abrir-popup"
								onclick="openPopup(<?php echo $id?>)"
							>
								Ver más
							</button>
						</div>
					</div>

					CERRAR ITEM EQUIPO

					
				</div>*/}
		</main>
	);
}
