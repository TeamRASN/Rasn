import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Componentes
import Navbar from "./GeneralNavbar";
import Equipo from "./Equipo";
import Blog from "./Blog";
import Faq from "./Faq";
import NuevoRegistro from "./NuevoRegistro";

export default function Animales() {
	return (
		<div className="graphs row">
			<h1 className="col-12">Ajustes Generales</h1>
			<Router basename="/Rasn/admin/general">
				<Navbar />
				<section className="general">
					<div className="general-sections">
						<Switch>
							<Route
								path={["/equipo/nuevo-miembro", "/faq/nueva-pregunta", "/blogs/nuevo-post"]}
								component={NuevoRegistro}
							/>
							<Route
								path={[
									"/equipo/nuevo-miembro/:memberIndex",
									"/faq/editar-pregunta",
									"/blogs/editar-post",
								]}
								component={NuevoRegistro}
							/>
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
