import React, { Component } from "react";

//Estilos
import "../css/index.css";

export default class Index extends Component {
	render() {
		return (
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
		);
	}
}
