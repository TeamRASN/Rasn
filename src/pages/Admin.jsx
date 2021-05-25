import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Componentes
import Navbar from "../components/Admin/Navbar";
import Graficos from "../components/Admin/Pages/Graficos";
import Animales from "../components/Admin/Pages/Animales";
import Generales from "../components/Admin/Pages/General";

//Estilos
import "../css/admin-sections.css";

export default function Admin() {
	return (
		<main>
			<Router basename="/Rasn/admin">
				<Navbar />
				<section className="admin">
					<div className="admin-sections">
						<Switch>
							<Route path="/general" component={Generales} />
							<Route path="/animales" component={Animales} />
							<Route path="/graficos" component={Graficos} />
						</Switch>
					</div>
				</section>
			</Router>
		</main>
	);
}
