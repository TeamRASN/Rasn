import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Rutas de Páginas
import Index from "./pages/Index";
import AnimalesR from "./pages/AnimalesRescatados";
import AnimalesA from "./pages/AnimalesAdoptados";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Esfuerzos from "./pages/Esfuerzos";
import Contacto from "./pages/Contacto";
import Faq from "./pages/Faq";
import Donativos from "./pages/Donativos";

//Componenetes
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Estilos
import "./css/header.css";
import "./css/customBts.css";
import "./css/index.css";

export default function App() {
	// Autorización simple en renderizado
	const [renderFooNav, setRenderFooNav] = useState(true);
	const [headerHeight, setHeaderHeight] = useState(90);

	return (
		<Router basename="/Rasn">
			{renderFooNav ? (
				<Navbar
					adminLogin={() => {
						setRenderFooNav(false);
						setHeaderHeight(0);
					}}
					minHeader={() => {
						setHeaderHeight(35);
					}}
					maxHeader={() => {
						setHeaderHeight(90);
					}}
				/>
			) : null}
			<Header headerHeight={headerHeight} />
			<Switch>
				<Route path="/contacto" component={Contacto} />
				<Route path="/faq" component={Faq} />
				<Route path="/donativos" component={Donativos} />
				<Route path="/esfuerzos" component={Esfuerzos} />
				<Route path="/rescatados" component={AnimalesR} />
				<Route path="/adoptados" component={AnimalesA} />
				<Route path="/login" component={Login} />
				<Route path="/admin/estadisticas" component={Admin} />
				<Route path="/" exact component={Index} />
			</Switch>
			{renderFooNav ? <Footer /> : null}
		</Router>
	);
}
