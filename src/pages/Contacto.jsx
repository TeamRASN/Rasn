import React, { Component } from "react";
import "../css/contacto.css";

export default class Contacto extends Component {
	render() {
		return (
			<div method="post" className="container contact-container">
				<h2 className="contact-header">Dejanos un mensaje</h2>
				<form method="post" className="contact-form row new-register-form">
					<div className="register-input-field col-12 col-sm-6">
						<input type="text" name="name" className="input" placeholder="Tú nombre" required />
					</div>
					<div className="register-input-field col-12 col-sm-6">
						<input
							type="email"
							name="email"
							className="email_cont input"
							placeholder="Correo electrónico"
						/>
					</div>
					<div className="register-input-field col-12 col-sm-6">
						<input type="tel" name="phone" className="input" placeholder="Tú número" />
					</div>
					<div className="register-input-field col-12 col-sm-6">
						<input type="text" name="subject" className="input" placeholder="Asunto" required />
					</div>
					<div className="register-input-field col-12">
						<textarea
							className="input contact-message"
							name="pregunta"
							placeholder="Mensaje"
							required
						></textarea>
					</div>

					<div className="register-input-field col-12 col-sm-6">
						<input type="submit" className="send-contact-form" />
					</div>
				</form>
			</div>
		);
	}
}
