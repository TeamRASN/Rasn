import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Rutas de Páginas
import Index from "./pages/Index";
import Mascotas from "./pages/Mascotas";
import Contacto from "./pages/Contacto";

//Componenetes
import Header from "./components/Header";
import Navbar from "./components/Navbar";

//Estilos
import "./css/header.css";
import "./css/customBts.css";
import Faq from"./pages/Faq";

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />

				<Router>
					<Navbar />
					<Switch>
						<Route path="/contacto" component={Contacto} />
						<Route path="/faq" component={Faq} />
						<Route path="/mascotas" component={Mascotas} />
						<Route path="/" exact component={Index} />
					</Switch>
				</Router>
			</div>
		);
	}
}
