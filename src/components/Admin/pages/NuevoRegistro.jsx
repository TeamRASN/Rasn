import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Componentes
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//Estilos
import "../../../css/nuevo-registro.css";

//Paquetes
function animalesForm() {
	return (
		<div className="row" style={{ padding: 0 }}>
			<div className="register-input-field col-12 col-sm-6">
				<input
					className="input col-12 col-sm-6"
					type="text"
					name="imagen_mascota"
					placeholder="Ingresar URL de la imagen"
				/>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="nombre" placeholder="Nombre" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input
					className="input col-12 col-sm-6"
					type="date"
					name="fecha_nacimiento"
					placeholder="Fecha de nacimiento"
				/>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" list="sexo" name="sexo" placeholder="Sexo" />
			</div>
			<datalist id="sexo">
				<option value="Macho" />
				<option value="Hembra" />
			</datalist>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="raza" placeholder="Raza" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="number" id="pesoVar" name="peso" placeholder="Peso" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="color" placeholder="Color" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="edad" placeholder="Edad" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="aptitud" placeholder="Aptitud" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="tamaño" placeholder="Tamaño" />
			</div>
		</div>
	);
}

function equipoForm() {
	return (
		<div className="row" style={{ padding: 0 }}>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="nombre" placeholder="Nombre" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="apellido" placeholder="Apellido" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="rol" placeholder="Rol" />
			</div>
		</div>
	);
}

function faqForm() {
	return (
		<div className="row" style={{ padding: 0 }}>
			<div className="register-input-field col-12 col-sm-6">
				<textarea className="input col-12 col-sm-6" name="pregunta" placeholder="Pregunta..."></textarea>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<textarea className="input col-12 col-sm-6" name="respuesta" placeholder="Respuesta..."></textarea>
			</div>
		</div>
	);
}

function blogsForm() {
	let date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let formatedDate;
	if (month < 10) {
		formatedDate = `${year}-0${month}-${day}`;
	} else {
		formatedDate = `${year}-${month}-${day}`;
	}

	return (
		<div className="row" style={{ padding: 0 }}>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="titulto" placeholder="Titulo" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="descripcion" placeholder="Descripcion" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="autor" placeholder="Autor (Opcional)" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="date" name="fecha" value={formatedDate} />
			</div>
			<CKEditor
				style={{ width: "100%" }}
				editor={ClassicEditor}
				onChange={(event, editor) => {
					const data = editor.getData();
					console.log({ event, editor, data });
				}}
				onBlur={(event, editor) => {
					console.log("Blur.", editor);
				}}
				onFocus={(event, editor) => {
					console.log("Focus.", editor);
				}}
			/>
		</div>
	);
}

export default function NuevoRegistro() {
	const [paquete, setPaquete] = useState(null);
	const [paqueteHeader, setPaqueteHeader] = useState(null);
	let location = useLocation();

	useEffect(() => {
		//* Asigna el paquete de inputs correspondiente a la ventana
		console.log(location.pathname);
		switch (location.pathname) {
			case "/equipo/nuevo-miembro":
				setPaquete(equipoForm());
				setPaqueteHeader(
					<p>
						<b>Añadir</b> nuevo integrante
					</p>
				);
				break;
			case "/faq/nueva-pregunta":
				setPaquete(faqForm());
				setPaqueteHeader(
					<p>
						<b>Añadir</b> nueva pregunta y respuesta
					</p>
				);
				break;
			case "/blogs/nuevo-post":
				setPaquete(blogsForm());
				setPaqueteHeader(
					<p>
						<b>Añadir</b> nuevo blog
					</p>
				);
				break;
			case "/animales/nuevo-animal":
				setPaquete(animalesForm());
				setPaqueteHeader(
					<p>
						<b>Añadir</b> nuevo animal
					</p>
				);
				break;
			default:
				break;
		}
	}, [location.pathname]);

	return (
		<div>
			<h1>{paqueteHeader}</h1>

			<form method="post" className="row new-register-form">
				{paquete}
				<div className="form-btn-container row" style={{ padding: 0 }}>
					<div className="register-btn-field col-6 col-sm-3">
						<div className="btn-danger">Cancelar</div>
					</div>
					<div className="register-btn-field col-6 col-sm-3">
						<div className="btn-success">Confirmar</div>
					</div>
				</div>
			</form>
		</div>
	);
}
