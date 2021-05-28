import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Componentes
import Navbar from "./GeneralNavbar";
import Equipo from "./Equipo";
import Blog from "./Blog";
import Faq from "./Faq";

export default function Animales() {
	return (
		<div className="graphs row">
			<h1 className="col-12">Ajustes Generales</h1>
			<Router basename="/Rasn/admin/general">
				<Navbar />
				<section className="general">
					<div className="general-sections">
						<Switch>
							<Route path="/faq" component={Faq} />
							<Route path="/blogs" component={Blog} />
							<Route path="/equipo" component={Equipo} />
						</Switch>
					</div>
				</section>
			</Router>
		</div>
	);
}
