import React, { Component } from "react";

//Componentes
import Mision from "../components/Inicio/Mision";
import Trabajo from "../components/Inicio/Trabajo";
import Equipo from "../components/Inicio/Equipo";

//Estilos
import "../css/index.css";

export default class Index extends Component {
	render() {
		return (
			<main>
				<Mision />
				<Trabajo />
				<Equipo />
			</main>
		);
	}
}
