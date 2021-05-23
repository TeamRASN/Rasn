import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Rutas de Páginas
import Index from "./pages/Index";
import Animales from "./pages/Animales";

//Componenetes
import Header from "./components/Header";
import Navbar from "./components/Navbar";

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
					<Switch>
						<Route path="/animales" component={Animales} />
						<Route path="/" exact component={Index} />
					</Switch>
				</Router>
			</div>
		);
	}
}
