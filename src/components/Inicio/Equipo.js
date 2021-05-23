import React from "react";

//Componentes
import Carousel from "react-elastic-carousel";
import Integrante from "./Tarjetas/Integrante";

//Estilos

export default function Equipo() {
	return (
		<section className="team-section">
			<div className="container pb-5 mt-5">
				<div className="row justify-content-center">
					<div className="col-12 heading-section">
						<h2 className="">Nuestro equipo</h2>
					</div>
				</div>
				<Carousel className="carousel">
					<Integrante />
					<Integrante />
					<Integrante />
					<Integrante />
					<Integrante />
				</Carousel>
			</div>
		</section>
	);
}
