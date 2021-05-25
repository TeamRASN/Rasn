import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Rutas de Páginas
import Index from "./pages/Index";
import AnimalesR from "./pages/AnimalesRescatados";
import Animales from "./pages/AnimalesAdoptados";
/* import Contacto from "./pages/Contacto";
import RedesSociales from "./pages/RedesSociales";
import FAQ from "./pages/PreguntasFrecuentes";
import Donativos from "./pages/Donativos";
import Colaboradores from "./pages/Colaboradores"; */

//Componenetes
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Estilos
import "./css/header.css";
import "./css/customBts.css";

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />

				<Router>
					<Navbar />
					<p> pa43so</p>
					<p> pa43so</p>
					<Switch>
						{/* <Route path="/Rasn/colaboradores" component={Colaboradores} />
						<Route path="/Rasn/donativos" component={Donativos} />
						<Route path="/Rasn/faq" component={FAQ} />
						<Route path="/Rasn/redes-sociales" component={RedesSociales} />
						<Route path="/Rasn/contacto" component={Contacto} /> */}
						<Route path="/Rasn/rescatados" component={AnimalesR} />
						<Route path="/Rasn/adoptados" component={Animales} />
						<Route path="/Rasn" exact component={Index} />
					</Switch>
				</Router>
				<Footer />
			</div>
		);
	}
}
