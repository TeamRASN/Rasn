import React, { Component } from "react";
import "../css/contacto.css";

export default class Contacto extends Component {
	render() {
		return (
			<div>
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
				<iframe
					title="Marcador del refugio"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.4014872257694!2d-58.42576068467056!3d-34.77066677385797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2f874dc90a9%3A0x81a9c356cc90daf0!2sGral.%20Fr%C3%ADas%2C%20Lomas%20de%20Zamora%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1624404719968!5m2!1ses-419!2sar"
					width="100%"
					height="300px"
					style={{ marginBottom: "-7.5px" }}
					frameBorder="0px"
				/>
			</div>
		);
	}
}
