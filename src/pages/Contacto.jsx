import React, { useEffect, useState } from "react";

// Componentes

// Estilos
import "../css/contacto.css";

//Paquetes
function legalForm() {
	return (
		<div className="subform-fields row">
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="name" className="input" placeholder="Nombre(s) *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="surname" className="input" placeholder="Apellido(s) *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="tel" name="phone" className="input" placeholder="Teléfono celular *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="breach" className="input" placeholder="Incumplimiento *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="email" name="email" className="input" placeholder="Correo electrónico *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="subject" className="input" placeholder="Asunto *" required />
			</div>
			<div className="register-input-field col-12">
				<textarea className="input contact-message" name="pregunta" placeholder="Mensaje *" required></textarea>
			</div>
		</div>
	);
}

function collaboratorForm() {
	return (
		<div className="subform-fields row">
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="name" className="input" placeholder="Nombre(s) *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="surname" className="input" placeholder="Apellido(s) *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="tel" name="phone" className="input" placeholder="Teléfono Celular *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="email" name="email" className="input" placeholder="Correo electrónico *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6 radio-province-group row">
				<div className="col-12 col-xxl-6">
					<input type="radio" id="amba" name="province" value="amba" checked />
					<label className="radio-province-label" htmlFor="amba">
						Área Metropolitana de Buenos Aires
					</label>
				</div>
				<div className="col-12 col-xxl-6">
					<input type="radio" id="caba" name="province" value="caba" />
					<label className="radio-province-label" htmlFor="caba">
						Ciudad Autónoma de Buenos Aires
					</label>
				</div>
				<div className="col-12 col-xxl-6">
					<input type="radio" id="gba" name="province" value="gba" />
					<label className="radio-province-label" htmlFor="gba">
						Gran Buenos Aires
					</label>
				</div>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="district" className="input" placeholder="Localidad/Barrio *" required />
			</div>
		</div>
	);
}

function sponsorForm() {
	return (
		<div className="subform-fields row">
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="name" className="input" placeholder="Nombre(s) *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="surname" className="input" placeholder="Apellido(s) *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="company" className="input" placeholder="Empresa *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="tel" name="phone" className="input" placeholder="Teléfono celular *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input
					type="email"
					name="email"
					className="email_cont input"
					placeholder="Correo electrónico *"
					required
				/>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="subject" className="input" placeholder="Asunto *" required />
			</div>
			<div className="register-input-field col-12">
				<textarea className="input contact-message" name="pregunta" placeholder="Mensaje *" required></textarea>
			</div>
		</div>
	);
}

function problemForm() {
	return (
		<div className="subform-fields row">
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="name" className="input" placeholder="Nombre(s) *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="surname" className="input" placeholder="Apellido(s)" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input
					type="text"
					list="os"
					name="operative-system"
					className="input"
					placeholder="Sistema operativo"
				/>
				<datalist id="os">
					<option value="Android" />
					<option value="iOS" />
					<option value="Linux o Variente" />
					<option value="Mac" />
					<option value="Windows 10" />
					<option value="Windows 7" />
					<option value="Windows 8.1" />
				</datalist>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input
					type="text"
					list="browser"
					name="browser"
					className="input"
					placeholder="Navegador WEB *"
					required
				/>
				<datalist id="browser">
					<option value="Avast Browser" />
					<option value="Brave" />
					<option value="Google Chrome" />
					<option value="Internet Explorer" />
					<option value="Microsoft Edge" />
					<option value="Mozilla Firefox" />
					<option value="Opera" />
					<option value="Safari" />
					<option value="Samsung Internet" />
				</datalist>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="email" name="email" className="input" placeholder="Correo electrónico *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="tel" name="phone" className="input" placeholder="Teléfono celular *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="subject" className="input" placeholder="Asunto *" required />
			</div>
			<div className="register-input-field col-12">
				<textarea className="input contact-message" name="pregunta" placeholder="Mensaje *" required></textarea>
			</div>
		</div>
	);
}

function othersForm() {
	return (
		<div className="subform-fields row">
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="name" className="input" placeholder="Nombre(s) *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="surname" className="input" placeholder="Apellido(s) *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="tel" name="phone" className="input" placeholder="Teléfono celular" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="email" name="email" className="input" placeholder="Correo electrónico *" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input type="text" name="subject" className="input" placeholder="Asunto *" required />
			</div>
			<div className="register-input-field col-12">
				<textarea className="input contact-message" name="pregunta" placeholder="Mensaje *" required></textarea>
			</div>
		</div>
	);
}

export default function Contacto(props) {
	const [paquete, setPaquete] = useState("Categoria");
	const [categoryValue, setCategoryValue] = useState(null);

	function cleanInputs() {
		const allInputs = document.getElementsByClassName("input");
		let cleanInputs = [];
		//* Elimina el campo de categoría de la lista de campos
		for (let index = 0; index < document.getElementsByClassName("input").length; index++) {
			if (allInputs[index].getAttribute("name") != null) {
				if (!allInputs[index].getAttribute("name").includes("category-contact")) {
					cleanInputs.push(allInputs[index]);
				}
			}
		}
		//* Limpia el valor de los campos de valores anteriores
		for (let i = 0; i < cleanInputs.length; i++) {
			cleanInputs[i].value = "";
		}
	}

	useEffect(() => {
		const categoryParam = props.location.categoryProps;
		let categoryCondition = document.getElementById("category-contact");
		categoryCondition.addEventListener("change", () => {
			setCategoryValue(categoryCondition.value);
			cleanInputs();
		});

		if (categoryParam != null && categoryCondition !== undefined) {
			if (categoryParam.name === "Colaboración Voluntaria") {
				setCategoryValue("Colaboración Voluntaria");
				categoryCondition.value = "Colaboración Voluntaria";
			}
		}

		switch (categoryValue) {
			case "Legal":
				setPaquete(legalForm);
				break;
			case "Colaboración Voluntaria":
				setPaquete(collaboratorForm);
				break;
			case "Patrocinio o Relación Empresarial":
				setPaquete(sponsorForm);
				break;
			case "Problema Técnico":
				setPaquete(problemForm);
				break;
			case "Consulta General":
				setPaquete(othersForm);
				break;
			default:
				setPaquete(othersForm);
				break;
		}
	}, [categoryValue, props.location.categoryProps]);

	return (
		<div>
			<div method="post" className="container contact-container">
				<h2 className="contact-header">Dejanos un mensaje</h2>
				<form method="post" className="contact-form row new-register-form">
					<div className="register-input-field col-12">
						<select id="category-contact" name="category-contact" className="input" required>
							<option value="" hidden>
								Categoría
							</option>
							<option>Legal</option>
							<option>Colaboración Voluntaria</option>
							<option>Patrocinio o Relación Empresarial</option>
							<option>Problema Técnico</option>
							<option>Consulta General</option>
						</select>
					</div>
					{paquete}
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
