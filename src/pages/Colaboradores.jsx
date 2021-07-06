import React from "react";

import Logo from "../assets/logo.svg";
// Estilos
import "../css/esfuerzos_donativos.css";

export default function Colaboradores() {
	return (
		<div className="container">
		<div className="howTo mt-5 text-center">
			<h2 className="tituloEstilo tituloEfecto pt-5 pb-3"><span>¿CÓMO PODÉS COLABORAR?</span></h2>
			
			<p className="parrafo"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate temporibus quod omnis ad, explicabo similique maxime mollitia sed et eaque alias cumque nisi id, magni quia neque expedita dignissimos ullam.</span></p>
				<div className="container-fluid my-5">
			<div className="row">
				<div className="col-md-8">
					<div className="pb-3">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Apóyanos económicamente </h5>
								<hr />
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<button type="button" className="btn btn-dark">
									Button
								</button>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="card" >
								<div className="card-header">Featured</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">Cras justo odio</li>
									<li className="list-group-item">Dapibus ac facilisis in</li>
									<li className="list-group-item">Vestibulum at eros</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card " >
								<ul className="list-group list-group-flush">
									<li className="list-group-item">Cras justo odio</li>
									<li className="list-group-item">Dapibus ac facilisis in</li>
									<li className="list-group-item">Vestibulum at eros</li>
								</ul>
								<div className="card-footer">Card footer</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
							<img
								className="img-fluid"
								src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
								alt=""
							/>
							<a href="#!">
								<div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
							</a>
						</div>
						<div className="card-body">
							<h3 className="card-title tituloEfecto">¿Sabías qué?</h3>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's
								content.Some quick example text to build on the card title and make up the bulk of the
							
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>


		<section className="container ms-container seccion">

			<div className="mision">
			<div className="card " >
				
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Lorem ipsum, dolor sit amet consectetur adipisicing</li>
				<li className="list-group-item">Lorem ipsum, dolor sit amet consectetur adipisicing</li>
				<li className="list-group-item">Lorem ipsum, dolor sit amet consectetur adipisicing</li>
				<li className="list-group-item">Lorem ipsum, dolor sit amet consectetur adipisicing</li>
				<li className="list-group-item">Lorem ipsum, dolor sit amet consectetur adipisicing</li>
				<li className="list-group-item">Lorem ipsum, dolor sit amet consectetur adipisicing</li>
				<li className="list-group-item">Lorem ipsum, dolor sit amet consectetur adipisicing</li>
			</ul>	
			</div>
			<div className="logo-img">
				<img src={Logo} alt="" />
				
			</div>	
			</div>
			</section>
			</div>

	</div>
	);
}