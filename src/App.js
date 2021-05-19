import React, { Component } from "react";

//Componenetes
import Header from "./components/Header";
import Navbar from "./components/Navbar";

//Estilos
import "./css/index.css";
import "./css/customBts.css";

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Header />

				<main>
					<div className="mission container mt-5">
						<h1>Nuestra misión</h1>
						<div className="row">
							<div className="col-sm-6">
								<div className="card">
									<div className="card-body text-white bg-dark">
										<h5 className="card-title">Special title treatment</h5>
										<p className="card-text">
											With supporting text below as a natural lead-in to additional content.
										</p>
										<a href="/" className="btn btn-primary">
											Go somewhere
										</a>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="card">
									<div className="card-body text-white bg-dark">
										<h5 className="card-title">Special title treatment</h5>
										<p className="card-text">
											With supporting text below as a natural lead-in to additional content.
										</p>
										<a href="/" className="btn btn-primary">
											Go somewhere
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}
