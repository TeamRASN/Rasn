import React from "react";

//Componenetes
import Adoptados from "../components/mascotas/Adoptados";

//Estilos
import "../css/mascotas.css";

export default function AnimalesA() {
	return (
		<main className="Mascotas">
			<div className="container">
				<Adoptados />
			</div>
		</main>
	);
}
