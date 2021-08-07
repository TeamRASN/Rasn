import React from "react";

//Componentes
import Carousel from "react-elastic-carousel";
import Integrante from "./tarjetas/Integrante";

//Estilos

//Objetos
const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
	{ width: 850, itemsToShow: 3 },
	{ width: 1150, itemsToShow: 4, itemsToScroll: 2 },
	{ width: 1450, itemsToShow: 5 },
	{ width: 1750, itemsToShow: 6 },
];

export default function Equipo() {
	return (
		<section className="team-section">
			<div className="container pb-5 mt-5">
				<div className="row justify-content-center">
					<div className="col-12 heading-section">
						<h2>Sumate a nuestro equipo!</h2>
					</div>
				</div>
				<Carousel
					className="carousel"
					itemsToScroll={1}
					itemsToShow={3}
					enableAutoPlay
					autoPlaySpeed={2000}
					itemPadding={[10, 20]}
					breakPoints={breakPoints}
				>
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
