import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// Componentes
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formik, Field, Form, ErrorMessage } from "formik";

//Estilos
import "../../../css/nuevo-registro.css";

//Paquetes
function animalesForm() {
	return (
		<div className="row" style={{ padding: 0 }}>
			<div className="register-input-field col-12 col-sm-6">
				<input
					className="input col-12 col-sm-6"
					type="url"
					name="imagen_mascota"
					placeholder="Ingresar URL de la imagen"
					required
				/>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="nombre" placeholder="Nombre" required />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input
					className="input col-12 col-sm-6"
					type="text"
					onFocus={(e) => {
						e.currentTarget.type = "date";
						e.currentTarget.focus();
					}}
					placeholder="Fecha de nacimiento"
				/>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" list="sexo" name="sexo" placeholder="Sexo" required />
			</div>
			<datalist id="sexo">
				<option value="Macho" />
				<option value="Hembra" />
			</datalist>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="raza" placeholder="Raza" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input
					className="input col-12 col-sm-6"
					type="number"
					id="pesoVar"
					name="peso"
					placeholder="Peso en kilogramos"
					required
				/>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input
					className="input col-12 col-sm-6"
					type="text"
					name="color"
					placeholder="Color de pelaje"
					required
				/>
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" type="text" name="aptitud" placeholder="Aptitud" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<input className="input col-12 col-sm-6" list="tamaño" name="tamaño" placeholder="Tamaño" />
			</div>
			<datalist id="tamaño">
				<option value="Muy pequeño" />
				<option value="Pequeño" />
				<option value="Mediano" />
				<option value="Grande" />
				<option value="Muy grande" />
			</datalist>
		</div>
	);
}

function equipoForm() {
	const containsNumber = (str) => {
		return /\d/.test(str);
	};

	function getId(str, separator) {
		let idObject = str.split(separator);
		return idObject[idObject.length - 1];
	}

	function fillData() {
		const pathname = window.location.pathname;
		if (containsNumber(pathname)) {
			const idObject = getId(pathname, "/");

			//Objetos
			const memberCards = [
				{
					id: 1,
					name: "Micaela",
					surname: "Darrel",
					image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
					rol: "Voluntaria",
				},
				{
					id: 2,
					name: "Hernan",
					surname: "Vargas",
					image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
					rol: "Voluntario",
				},
				{
					id: 3,
					name: "Paola",
					surname: "Thomson",
					image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
					rol: "Organizadora",
				},
				{
					id: 4,
					name: "Miguel",
					surname: "Fernandez",
					image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
					rol: "Voluntario",
				},
				{
					id: 5,
					name: "Carolina",
					surname: "Gomez",
					image: "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
					rol: "Organizadora",
				},
				{
					id: 6,
					name: "Lucas",
					surname: "Essandy",
					image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
					rol: "Voluntario",
				},
				{
					id: 7,
					name: "Uriel",
					surname: "Franco",
					image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80",
					rol: "Voluntario",
				},
				{
					id: 8,
					name: "Tomas",
					surname: "Birgo",
					image: "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
					rol: "Voluntario",
				},
			];

			//search the object who has the same id as the parameter
			const updateObject = memberCards.find((element) => {
				// eslint-disable-next-line eqeqeq
				return element.id == idObject;
			});

			if (document.getElementById("image") !== null) {
				document.getElementById("image").value = updateObject.image;
				console.log(document.getElementById("image").value);
			}
		}
	}

	function changePreviewImage(image) {
		const previewImage = document.getElementById("preview-image");
		previewImage.style.backgroundImage = `url(${image})`;
		previewImage.style.display = "block";
	}

	return (
		<Formik
			initialValues={{
				image: "",
				nombre: "",
				apellido: "",
				rol: "",
			}}
			validate={(values) => {
				const errors = {};
				if (values.image.length > 0) {
					changePreviewImage(values.image);
				} else {
					const previewImage = document.getElementById("preview-image");
					previewImage.style.display = "none";
					errors.image = "Ingrese una dirección URL válida";
				}
				if (values.nombre.length > 20 || values.nombre.length < 3) {
					errors.nombre = "Escriba un nombre entre 3 y 20 caracteres.";
				}
				if (values.apellido.length > 15 || values.apellido.length < 4) {
					errors.apellido = "Escriba un apellido entre 4 y 15 caracteres.";
				}
				return errors;
			}}
			onSubmit={async (values) => {
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form className="row" style={{ padding: 0 }} id="mainForm">
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="url"
						name="image"
						placeholder="Ingresar URL de la foto"
						id="image"
						required
						onLoad={fillData()}
					/>
					<ErrorMessage className="input-error" name="image" component="div" />
					<div className="preview-image" id="preview-image"></div>
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field className="input col-12 col-sm-6" type="text" name="nombre" placeholder="Nombre" required />
					<ErrorMessage className="input-error" name="nombre" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="text"
						name="apellido"
						placeholder="Apellido"
						required
					/>
					<ErrorMessage className="input-error" name="apellido" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field className="input col-12 col-sm-6" list="rol" name="rol" placeholder="Rol" required />
				</div>
				<datalist id="rol">
					<option value="Organizador" />
					<option value="Voluntario" />
				</datalist>
				<button id="btn-submit-form" type="submit" className="invisible-btn"></button>
			</Form>
		</Formik>
	);
}

function faqForm() {
	return (
		<Formik
			initialValues={{
				pregunta: "",
				respuesta: "",
			}}
			validate={(values) => {
				const errors = {};
				if (values.pregunta.length > 150) {
					errors.pregunta = "Formule una pregunta con menos de 150 caracteres";
				}
				if (values.respuesta.length > 300) {
					errors.pregunta = "Redacte una respuesta con menos de 300 caracteres";
				}
				return errors;
			}}
			onSubmit={async (values) => {
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form className="row" style={{ padding: 0 }} id="mainForm">
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="text"
						name="pregunta"
						placeholder="Pregunta"
						required
					/>
					<ErrorMessage className="input-error" name="pregunta" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="text"
						name="respuesta"
						placeholder="Respuesta"
						required
					/>
					<ErrorMessage className="input-error" name="respuesta" component="div" />
				</div>
				<button id="btn-submit-form" type="submit" className="invisible-btn"></button>
			</Form>
		</Formik>
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

	function changePreviewImage(image) {
		const previewImage = document.getElementById("preview-image");
		previewImage.style.backgroundImage = `url(${image})`;
		previewImage.style.display = "block";
	}

	let noticeContent;

	return (
		<Formik
			initialValues={{
				image: "",
				title: "",
				description: "",
				content: "",
				author: "",
				dateCreated: formatedDate,
			}}
			validate={(values) => {
				const errors = {};
				if (values.image.length > 0) {
					changePreviewImage(values.image);
				} else {
					errors.image = "Ingrese una dirección URL válida";
				}
				if (values.title.length > 100) {
					errors.title = "La cantidad de caracteres del título no debe superar los 100.";
				}
				if (values.description.length > 400) {
					errors.title = "La cantidad de caracteres de la descripción no debe superar los 400.";
				}
				return errors;
			}}
			onSubmit={async (values) => {
				values.content = noticeContent;
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form className="row" style={{ padding: 0 }} id="mainForm">
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="url"
						name="image"
						placeholder="Ingresar URL de la foto"
						required
					/>
					<ErrorMessage className="input-error" name="image" component="div" />
					<div className="preview-image" id="preview-image"></div>
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="text"
						name="title"
						placeholder="Titulo"
						id="title"
						required
					/>
					<ErrorMessage className="input-error" name="title" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="text"
						name="description"
						placeholder="Descripcion"
						required
					/>
					<ErrorMessage className="input-error" name="description" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field className="input col-12 col-sm-6" type="text" name="author" placeholder="Autor" />
					<ErrorMessage className="input-error" name="author" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="date"
						name="dateCreated"
						value={formatedDate}
						disabled
					/>
				</div>
				<CKEditor
					style={{ width: "100%" }}
					editor={ClassicEditor}
					onChange={(event, editor) => {
						const data = editor.getData();
						noticeContent = data;
						//console.log({ data });
					}}
				/>
				<button id="btn-submit-form" type="submit" className="invisible-btn"></button>
			</Form>
		</Formik>
	);
}

export default function NuevoRegistro() {
	const [paquete, setPaquete] = useState(null);
	const [paqueteHeader, setPaqueteHeader] = useState(null);
	const [pageType, setPageType] = useState("Ingresar");
	let location = useLocation();
	const history = useHistory();

	const sendForm = () => {
		let mainForm = document.getElementById("btn-submit-form");
		mainForm.click();
	};

	//search if a string includes a number
	const containsNumber = (str) => {
		return /\d/.test(str);
	};

	useEffect(() => {
		if (containsNumber(location.pathname)) {
			setPageType("Modificar");
		}

		let tempUrl;
		if (location.pathname.includes("/equipo/nuevo-miembro")) {
			tempUrl = "/equipo/nuevo-miembro";
		} else if (location.pathname.includes("/faq/nueva-pregunta")) {
			tempUrl = "/faq/nueva-pregunta";
		} else if (location.pathname.includes("/blogs/nuevo-post")) {
			tempUrl = "/blogs/nuevo-post";
		} else if (location.pathname.includes("/animales/nuevo-animal")) {
			tempUrl = "/animales/nuevo-animal";
		}

		//* Asigna el paquete de inputs correspondiente a la ventana
		switch (tempUrl) {
			case "/equipo/nuevo-miembro":
				setPaquete(equipoForm());
				setPaqueteHeader("integrante");
				break;
			case "/faq/nueva-pregunta":
				setPaquete(faqForm());
				setPaqueteHeader("pregunta y respuesta");
				break;
			case "/blogs/nuevo-post":
				setPaquete(blogsForm());
				setPaqueteHeader("blog");
				break;
			case "/animales/nuevo-animal":
				setPaquete(animalesForm());
				setPaqueteHeader("animal");
				break;
			default:
				break;
		}
	}, [location.pathname, pageType]);

	return (
		<div>
			<h1>
				<p>
					<b>{pageType}</b> {paqueteHeader}
				</p>
			</h1>

			<div method="post" className="row new-register-form">
				<div className="form-btn-container row" style={{ padding: 0 }}>
					{paquete}
					<div
						className="register-btn-field col-6 col-sm-3"
						onClick={() => history.push(`/${location.pathname.split("/")[1]}`)}
					>
						<div className="btn-danger">Cancelar</div>
					</div>
					<div className="register-btn-field col-6 col-sm-3">
						<div className="btn-success" onClick={sendForm}>
							Confirmar
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
