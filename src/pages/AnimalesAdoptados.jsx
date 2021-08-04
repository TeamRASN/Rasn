import React from "react";

//Componenetes
import Adoptados from "../components/Mascotas/Adoptados";

//Estilos
import "../css/mascotas.css";

export default function AnimalesA() {
	return (
		<main className="mascotas-page">
			<div className="container">
				<Adoptados />
			</div>
		</main>
	);
}
