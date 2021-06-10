import React from "react";

// Componentes

// Estilos
import "../css/esfuerzos_donativos.css";

export default function Esfuerzos() {
	return (
		<div className="rounded mb-5">
			<div className="container-fluid">
				<div className="p-3">
					<h1 className="tituloEstilo tituloEfecto mb-3">
						Nuestros esfuerzos{" "}
						<small>
							<i className="fab-icon fa fa-handshake-o text-dark"></i>
						</small>
					</h1>
					<hr />
				</div>
				<div className="carta">
					<div
						className="carta-img"
						style={{ backgroundImage: `url(https://unsplash.it/1920/1080?random=1)` }}
					>
						<div className="overlay">
							<div className="overlay-content">
								<a href="#!">View Project</a>
							</div>
						</div>
					</div>

					<div className="carta-content">
						<a href="#!">
							<h2>Title</h2>
							<p>Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor</p>
						</a>
					</div>
				</div>

				<div className="carta">
					<div
						className="carta-img"
						style={{ backgroundImage: `url(https://unsplash.it/1920/1080?random=2)` }}
					>
						<div className="overlay">
							<div className="overlay-content">
								<a href="#!">View Project</a>
							</div>
						</div>
					</div>

					<div className="carta-content">
						<a href="#!">
							<h2>Title</h2>
							<p>Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor</p>
						</a>
					</div>
				</div>
				<div className="carta">
					<div
						className="carta-img"
						style={{ backgroundImage: `url(https://unsplash.it/1920/1080?random=3)` }}
					>
						<div className="overlay">
							<div className="overlay-content">
								<a href="#!">View Project</a>
							</div>
						</div>
					</div>

					<div className="carta-content">
						<a href="#!">
							<h2>Title</h2>
							<p>Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor</p>
						</a>
					</div>
				</div>

				<div className="carta">
					<div
						className="carta-img"
						style={{ backgroundImage: `url(https://unsplash.it/1920/1080?random=4)` }}
					>
						<div className="overlay">
							<div className="overlay-content">
								<a href="#!">View Project</a>
							</div>
						</div>
					</div>

					<div className="carta-content">
						<a href="#!">
							<h2>Title</h2>
							<p>Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor</p>
						</a>
					</div>
				</div>
				<div className="carta">
					<div
						className="carta-img"
						style={{ backgroundImage: `url(https://unsplash.it/1920/1080?random=5)` }}
					>
						<div className="overlay">
							<div className="overlay-content">
								<a href="#!">View Project</a>
							</div>
						</div>
					</div>

					<div className="carta-content">
						<a href="#!">
							<h2>Title</h2>
							<p>Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor</p>
						</a>
					</div>
				</div>
				<div className="carta">
					<div
						className="carta-img"
						style={{ backgroundImage: `url(https://unsplash.it/1920/1080?random=6)` }}
					>
						<div className="overlay">
							<div className="overlay-content">
								<a href="#!">View Project</a>
							</div>
						</div>
					</div>

					<div className="carta-content">
						<a href="#!">
							<h2>Title</h2>
							<p>Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
