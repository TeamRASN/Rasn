import React from "react";

//Componenetes
import Adoptados from "../components/Mascotas/Adoptados";

//Estilos
import "../css/mascotas.css";

export default function AnimalesA() {
	return (
		<main className="Mascotas">
			<div className="container">
				<Adoptados />
			</div>

			{/* <div className="overlay" id="overlay">
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
			</div> */}
		</main>
	);
}
