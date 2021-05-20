import React, { Component } from "react";

//Componenetes
import Cards from "../components/Mascotas/Cards";
// eslint-disable-next-line no-unused-vars
import Mia from "../assets/Mia.jpg";

//Estilos
import "../css/mascotas.css";

export default class Mascotas extends Component {
	render() {
		return (
			<div>
				<h1>MASCOTAS RESCATADAS</h1>

				<Cards />

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

					<div className="overlay" id="overlay">
						<div className="popup" id="popup">
							<div className="img" style={{ backgroundImage: "../assets/Mia.jpg" }}></div>
							<div className="container-text">
								<h1>Mia</h1>
								<div className="descripcion">
									<div className="renglon">
										<h4>Sexo:</h4>
										<p>Femenino</p>
									</div>
									<div className="renglon">
										<h4>Peso:</h4>
										<p>10kg</p>
									</div>
									<div className="renglon">
										<h4>Nacimiento:</h4>
										<p> 12/03/2018</p>
									</div>
									<div className="renglon">
										<h4>Edad:</h4>
										<p>5 años</p>
									</div>
									<div className="renglon">
										<h4>Color:</h4>
										<p>Blanco con manchas marrones</p>
									</div>
									<div className="renglon">
										<h4>Tamaño:</h4>
										<p>Pequeño</p>
									</div>
									<div className="renglon">
										<h4>Raza:</h4>
										<p>Europeo común</p>
										<br />
									</div>
									<div className="renglon"></div>
									<div className="renglon aptitud">
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
				</div>*/}
			</div>
		);
	}
}
