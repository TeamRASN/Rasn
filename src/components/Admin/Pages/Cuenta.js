/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Graficos() {
	return (
		<div className="cuenta row">
			<h1 className="col-12">Cuenta</h1>
			<div className="cuenta-sec col-12 col-md-6">
				<div className="sec-content">
					<span className="section-name">Olvidé mi contraseña</span>
					<div className="pass-container">
						<input className="input-email" type="text" placeholder="Correo electrónico asociado" />
					</div>
					<div className="pass-container">
						<button className="send-btn" type="submit">
							Enviar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
