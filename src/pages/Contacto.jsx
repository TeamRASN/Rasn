import React, { Component } from "react";
import "../css/contacto.css";

export default class Contacto extends Component {
	render() {
		return (
			<div>
				<div className="contacto-form">
					<form method="post">
						<div className="all">
							<h1 className="titulo">
								<b>Realiza las consultas necesarias!!!</b>
							</h1>
							<div>
								<p className="consultanos">Contanos tu problema:</p>
								<ul>
									<textarea
										name="consultanos"
										rows="15"
										cols="20"
										placeholder="Hola! Dejanos todas tus dudas en esta seccion!"
										className="contact-consultas"
									></textarea>
								</ul>
							</div>

							<div>
								<p className="email">Email:</p>
								<ul>
									<input
										type="email"
										name="email"
										className="email_cont"
										placeholder="esteban.gimenez123@gmail.com"
									/>
								</ul>
							</div>
							<ul>
								<input type="submit" className="send-contact-form" />
							</ul>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
