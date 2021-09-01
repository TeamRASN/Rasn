import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Componentes
import Navbar from "../components/Admin/Navbar";
import Estadisticas from "../components/Admin/Pages/Estadisticas";
import Animales from "../components/Admin/Pages/Animales";
import Generales from "../components/Admin/Pages/General";
import Cuenta from "../components/Admin/Pages/Cuenta";
import NuevoRegistro from "../components/Admin/Pages/NuevoRegistro";

//Estilos
import "../css/admin-sections.css";

export default function Admin() {
	return (
		<Router basename="/Rasn/admin">
			<Navbar />
			<section className="admin">
				<div className="admin-sections">
					<Switch>
						<Route path="/animales/nuevo-animal" component={NuevoRegistro} />
						<Route path="/cuenta" component={Cuenta} />
						<Route path="/general" component={Generales} />
						<Route path="/animales" component={Animales} />
						<Route path="/estadisticas" component={Estadisticas} />
					</Switch>
				</div>
			</section>
		</Router>
	);
}
