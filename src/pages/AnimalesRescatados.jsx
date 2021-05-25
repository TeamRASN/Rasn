import React, { Component } from "react";
import { useState } from "react";

//Componenetes
import Rescatados from "../components/Mascotas/Rescatados";
import Dog from "../assets/Dog.jpg";

//Estilos
import "../css/mascotas.css";

/* export default function AnimalesRescatados() {
	
}

import React, { Component } from 'react' */

export default class AnimalesRescatados extends Component {
	render() {
		/* const [showPopup, setShowPopup] = useState(false); */

		const changePopup = () => {
			const overlay = document.getElementById("overlay");
			const popup = document.getElementById("popup");
			/* setShowPopup(!showPopup);
			if (showPopup) {
				overlay.classList.add("active");
				popup.classList.add("active");
			} else {
				overlay.classList.remove("active");
				popup.classList.remove("active");
			} */
		};

		return (
			<main className="Mascotas">
				<div className="container">
					<Rescatados popup={() => changePopup()} />
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
								<div id="btn-cerrar-popup" className="btn-cerrar-popup" onClick={changePopup}>
									<i className="fas fa-times"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
