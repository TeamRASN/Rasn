import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

//Rutas de Páginas
import Index from "./pages/Index";
import AnimalesR from "./pages/AnimalesRescatados";
import AnimalesA from "./pages/AnimalesAdoptados";
import Admin from "./pages/Admin";
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

export default function App() {
	// Autorización simple en renderizado
	const [adminView, setAdminView] = useState(false);

	useEffect(() => {
		/* if (setAdminView) {
			setAdminView(false);
		} */
	}, []);

	const authorizeAdmin = () => {
		setAdminView(true);
	};

	return (
		<div>
			<Router>
				{adminView ? null : <Navbar admin={() => authorizeAdmin()} />}
				{adminView ? null : <Header />}
				<Switch>
					{/* <Route path="/Rasn/colaboradores" component={Colaboradores} />
						<Route path="/Rasn/donativos" component={Donativos} />
						<Route path="/Rasn/faq" component={FAQ} />
						<Route path="/Rasn/redes-sociales" component={RedesSociales} />
						<Route path="/Rasn/contacto" component={Contacto} /> */}
					<Route path="/Rasn/rescatados" component={AnimalesR} />
					<Route path="/Rasn/adoptados" component={AnimalesA} />
					<Route path="/Rasn/admin/graficos" component={Admin} />
					<Route path="/Rasn" exact component={Index} />
				</Switch>
				{adminView ? null : <Footer />}
			</Router>
		</div>
	);
}
