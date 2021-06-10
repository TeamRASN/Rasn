import React from "react";

// Componentes
import Perfil from "../assets/perfil.png";
import Mail from "../assets/mail.png";
import Phone from "../assets/phone.png";
import Carousel from "react-elastic-carousel";

// Estilos
import "../css/esfuerzos_donativos.css";

export default function Donativos() {
	return (
		<div className="container-fluid mb-5">
			<div className="p-3">
				<h1 className="tituloEstilo tituloEfecto mb-3">
					Formas en las que podés apoyarnos{" "}
					<small>
						<i className="fab-icon fa fa-handshake-o text-dark"></i>
					</small>
				</h1>
				<hr />
			</div>

			<Carousel className="carousel">
				<div className="card text-center">
					<div className="card-header">Actualmente no disponible</div>
					<div className="card-body">
						<h5 className="card-title">En Persona</h5>
						<p className="card-text">
							Contactanos por whatsapp, haciendo clic en el logo, para solicitar información y acordar un
							encuentro{" "}
						</p>
						<a href="##">
							<img className="imgLogo" src={Perfil} alt="Card cap" />
						</a>
					</div>
					<div className="card-footer text-muted">2 days ago</div>
				</div>
				<div className="card text-center">
					<div className="card-header">Featured</div>
					<div className="card-body">
						<h5 className="card-title">Con Tarjeta de Crédito</h5>
						<p className="card-text">
							With supporting text below as a natural lead-in to additional content.
						</p>
						<a href="##">
							<img className="imgLogo" src={Mail} alt="Card cap" />
						</a>
					</div>
					<div className="card-footer text-muted">2 days ago</div>
				</div>
				<div className="card text-center">
					<div className="card-header">Featured</div>
					<div className="card-body">
						<h5 className="card-title">Por Transferencia Bancaria</h5>
						<p className="card-text">1- Banco de la Ciudad de Buenos Aires - Suc. Colegiales</p>
						<p className="card-text">Cuenta Corriente 198/0 </p>
						<p className="card-text">CBU *************** </p>
						<p className="card-text">2- Banco Nación - Suc. Colegiales </p>
						<p className="card-text">CBU ************** </p>

						<a href="##">
							<img className="imgLogo" src={Phone} alt="Card cap" />
						</a>
					</div>
					<div className="card-footer text-muted">2 days ago</div>
				</div>
				<div className="card text-center">
					<div className="card-header">Featured</div>
					<div className="card-body">
						<h5 className="card-title">Mercado Pago</h5>
						<p className="card-text">
							PROXIMAMENTE CODIGO QRPROXIMAMENTE CODIGO QRPROXIMAMENTE CODIGO QRPROXIMAMENTE CODIGO QR
						</p>
						<a href="##">
							<img className="imgLogo" src="" alt="Card cap" />
						</a>
					</div>
					<div className="card-footer text-muted">2 days ago</div>
				</div>
			</Carousel>
		</div>
	);
}
