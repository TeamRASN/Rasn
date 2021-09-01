import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

// Componentes
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formik, Field, Form, ErrorMessage } from "formik";

//Estilos
import "../../../css/nuevo-registro.css";

//Paquetes
function animalesForm() {
	let updateObject;
	const pathname = window.location.search;
	if (containsQuestionMark(pathname)) {
		const animalData = getData(pathname, "?");

		let str = "{";
		let tempStr;
		animalData.forEach((e) => {
			if (!e.includes("https")) {
				str += `"${e.split("=")[0]}":"${e.split("=")[1]}",`;
			} else {
				let first = e.indexOf("=");
				tempStr = `"${e.slice(0, first)}":"${e.slice(first + 1)}",`;
				str += tempStr;
			}
		});
		str = str.substring(0, str.length - 1);
		str += "}";

		updateObject = JSON.parse(decodeURIComponent(str));
		updateObject.peso = parseInt(updateObject.peso);
	} else {
		updateObject = {
			nombre: "",
			color: "",
			sexo: "",
			peso: "",
			fechaNacimiento: "",
			raza: "",
			tamanio: "",
			estado: "",
			actitud: "",
			imagen: "",
		};
	}

	function changePreviewImage(imagen) {
		const previewImage = document.getElementById("preview-image");
		previewImage.style.backgroundImage = `url(${imagen})`;
		previewImage.style.display = "block";
	}

	return (
		<Formik
			initialValues={{
				id: updateObject.id,
				nombre: updateObject.nombre,
				color: updateObject.color,
				sexo: updateObject.sexo,
				peso: updateObject.peso,
				fechaNacimiento: updateObject.fechaNacimiento,
				raza: updateObject.raza,
				tamanio: updateObject.tamanio,
				estado: updateObject.estado,
				actitud: updateObject.actitud,
				imagen: updateObject.imagen,
			}}
			validate={(values) => {
				const errors = {};
				if (values.imagen !== undefined) {
					if (values.imagen.length > 0) {
						changePreviewImage(values.imagen);
					} else {
						const previewImage = document.getElementById("preview-image");
						previewImage.style.display = "none";
						errors.image = "Ingrese una dirección URL válida";
					}
				}

				return errors;
			}}
			onSubmit={async (values) => {
				Axios.post("http://localhost:3001/Rasn/admin/animales/actualizar-animal", values).then((res) => {
					console.log(res.data);
				}).then(alert("Todo bien"));
				
			}}
		>
			<Form className="row" style={{ padding: 0 }} id="mainForm">
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="url"
						name="imagen"
						placeholder="Ingresar URL de la foto"
						required
					/>
					<ErrorMessage className="input-error" name="imagen" component="div" />
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
						onFocus={(e) => {
							e.currentTarget.type = "date";
							e.currentTarget.focus();
						}}
						name="fechaNacimiento"
						placeholder="Fecha de nacimiento"
					/>
					<ErrorMessage className="input-error" name="fechaNacimiento" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field className="input col-12 col-sm-6" list="sexo" name="sexo" placeholder="Sexo" required />
					<ErrorMessage className="input-error" name="sexo" component="div" />
				</div>
				<datalist id="sexo">
					<option value="Macho" />
					<option value="Hembra" />
				</datalist>
				<div className="register-input-field col-12 col-sm-6">
					<Field className="input col-12 col-sm-6" type="text" name="raza" placeholder="Raza" required />
					<ErrorMessage className="input-error" name="raza" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="number"
						name="peso"
						placeholder="Peso en kilogramos"
						required
					/>
					<ErrorMessage className="input-error" name="peso" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="text"
						name="color"
						placeholder="Color de pelaje"
						required
					/>
					<ErrorMessage className="input-error" name="color" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						list="tamaño"
						name="tamanio"
						placeholder="Tamaño"
						required
					/>
					<ErrorMessage className="input-error" name="tamanio" component="div" />
				</div>
				<datalist id="tamaño">
					<option value="Muy pequeño" />
					<option value="Pequeño" />
					<option value="Mediano" />
					<option value="Grande" />
					<option value="Muy grande" />
				</datalist>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						list="estado"
						name="estado"
						placeholder="Estado"
						required
					/>
					<ErrorMessage className="input-error" name="estado" component="div" />
				</div>
				<datalist id="estado">
					<option value="En adopción" />
					<option value="Adoptado" />
				</datalist>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="text"
						name="actitud"
						placeholder="Actitud"
						required
					/>
					<ErrorMessage className="input-error" name="actitud" component="div" />
				</div>
				<button id="btn-submit-form" type="submit" className="invisible-btn"></button>
			</Form>
		</Formik>
	);
}

function equipoForm() {
	let updateObject;
	const pathname = window.location.pathname;
	if (containsQuestionMark(pathname)) {
		const idObject = getId(pathname, "/");

		//Objetos
		const memberCards = [
			{
				id: 1,
				nombre: "Micaela",
				apellido: "Darrel",
				image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
				rol: "Voluntaria",
			},
			{
				id: 2,
				nombre: "Hernan",
				apellido: "Vargas",
				image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
				rol: "Voluntario",
			},
			{
				id: 3,
				nombre: "Paola",
				apellido: "Thomson",
				image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
				rol: "Organizadora",
			},
			{
				id: 4,
				nombre: "Miguel",
				apellido: "Fernandez",
				image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
				rol: "Voluntario",
			},
			{
				id: 5,
				nombre: "Carolina",
				apellido: "Gomez",
				image: "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
				rol: "Organizadora",
			},
			{
				id: 6,
				nombre: "Lucas",
				apellido: "Essandy",
				image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
				rol: "Voluntario",
			},
			{
				id: 7,
				nombre: "Uriel",
				apellido: "Franco",
				image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80",
				rol: "Voluntario",
			},
			{
				id: 8,
				nombre: "Tomas",
				apellido: "Birgo",
				image: "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
				rol: "Voluntario",
			},
		];

		//search the object who has the same id as the parameter
		updateObject = memberCards.find((element) => {
			// eslint-disable-next-line eqeqeq
			return element.id == idObject;
		});
	} else {
		updateObject = {
			image: "",
			nombre: "",
			apellido: "",
			rol: "",
		};
	}

	function changePreviewImage(image) {
		const previewImage = document.getElementById("preview-image");
		previewImage.style.backgroundImage = `url(${image})`;
		previewImage.style.display = "block";
	}

	return (
		<Formik
			initialValues={{
				image: updateObject.image,
				nombre: updateObject.nombre,
				apellido: updateObject.apellido,
				rol: updateObject.rol,
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
				if (values.nombre !== undefined) {
					if (values.nombre.length > 20 || values.nombre.length < 3) {
						errors.nombre = "Escriba un nombre entre 3 y 20 caracteres.";
					}
				}

				if (values.apellido !== undefined) {
					if (values.apellido.length > 15 || values.apellido.length < 4) {
						errors.apellido = "Escriba un apellido entre 4 y 15 caracteres.";
					}
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
	let updateObject;
	const pathname = window.location.pathname;
	if (containsQuestionMark(pathname)) {
		const idObject = getId(pathname, "/");

		//Objetos
		const faqCards = [
			{
				id: 1,
				pregunta: "¿Dónde mantenemos a las mascotas?",
				respuesta:
					"Las mascotas se encuentran resguardadas en un refugio alquilado. Nuestro equipo de voluntarios se encarga de darles todos los cuidados necesarios, dando de su tiempo para visitar el refugio y asegurarse de que todo esté bien.",
			},
			{
				id: 2,
				pregunta: "Quiero adoptar a una de las mascotas. ¿Qué debo hacer?",
				respuesta:
					'Si quieres adoptar a una de las mascotas, puedes contactarte con nosotros usando la opción "Contacto Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales, que también encontrarás en este sitio. Te responderemos a la brevedad para que tengas toda la información sobre la mascota.',
			},
			{
				id: 3,
				pregunta: "Quiero ayudar como voluntario. ¿Qué debo hacer?",
				respuesta:
					'Si quieres formar parte de nuestro equipo, contáctate con nosotros usando la opción "Contacto Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales. Por favor infórmanos tu nombre y edad. Uno de los miembros de nuestro equipo se contactará con vos para acordar un horario en que puedas colaborar.',
			},
		];

		//search the object who has the same id as the parameter
		updateObject = faqCards.find((element) => {
			// eslint-disable-next-line eqeqeq
			return element.id == idObject;
		});
	} else {
		updateObject = {
			pregunta: "",
			respuesta: "",
		};
	}

	return (
		<Formik
			initialValues={{
				pregunta: updateObject.pregunta,
				respuesta: updateObject.respuesta,
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

	let updateObject;
	const pathname = window.location.pathname;
	if (containsQuestionMark(pathname)) {
		const idObject = getId(pathname, "/");

		//Objetos
		const blogCards = [
			{
				id: 1,
				titulo: "Insectpark, el museo donde “entras pensando que los bichos son pequeños y negros y sales fascinado”",
				imagen: "https://imagenes.elpais.com/resizer/Bm-oXzBuQJPxtzqOAMNuW24XnKk=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/NILZMYSRSBEMFCPFTC6JRG6ZYU.jpg",
				descripcion:
					"A las puertas del Parque Nacional de Guadarrama se alza un curioso y didáctico museo dedicado a los insectos, con ejemplares vivos que se pueden tocar y otros naturalizados",
			},
			{
				id: 2,
				titulo: "Los pangolines son «el mamífero más traficado del mundo». Este hombre quiere salvarlos",
				imagen: "https://cnnespanol.cnn.com/wp-content/uploads/2021/06/pangolin-2.jpg",
				descripcion:
					"(CNN) — Los pangolines —mamíferos cuadrúpedos con garras parecidas a las de los perezosos, hocico de oso hormiguero y una armadura de escamas en forma de diamante— se consideran el mamífero más traficado del mundo. Algunas especies están al borde de la extinción.",
			},
			{
				id: 3,
				titulo: "Cientos de ganaderos claman contra el lobo en Madrid",
				imagen: "https://imagenes.elpais.com/resizer/vOclpwIkLajB1m6O9kOnV7sNddE=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YJVJGULKTZFCFGWP5BQ3VQ24CI.JPG",
				descripcion:
					"La manifestación ha reunido a unas 400 personas ante el Ministerio para la Transición Ecológica para pedir a Teresa Ribera que pare la orden ministerial que impedirá cazar al cánido",
			},
			{
				id: 4,
				titulo: "'Gunda', un evangelio vegano",
				imagen: "https://estaticos-cdn.elperiodico.com/clip/f1eb3fe5-776c-4581-92d6-4edbccf3b907_alta-libre-aspect-ratio_default_0.jpg",
				descripcion:
					"Un documental de Victor Kossakovsky se acerca con una mirada inédita y muchos gruñidos a la aciaga vida de los animales de granja",
			},
			{
				id: 5,
				titulo: "Decenas de personas exigen en Barcelona la liberación de animales de Vivotecnia",
				imagen: "https://estaticos-cdn.elperiodico.com/clip/9c5217ce-3532-4185-85d9-75c9923ed6bf_alta-libre-aspect-ratio_default_0.jpg",
				descripcion:
					"Gobierno, fiscalía y policía han abierto una investigación contra este laboratorio de experimentación con animales en Madrid",
			},
			{
				id: 6,
				titulo: "La Fiscalía abre diligencias por el presunto maltrato animal en el laboratorio Vivotecnia",
				imagen: "https://estaticos-cdn.elperiodico.com/clip/979c971d-13d5-4f91-9e41-1ebcb95f94e9_alta-libre-aspect-ratio_default_0.jpg",
				descripcion:
					"La Fiscalía de Medio Ambiente ha abierto diligencias para investigar el presunto caso de maltrato animal en el laboratorio Vivotecnia, situado en Tres Cantos, tras la difusión de un vídeo que muestra cómo el personal presuntamente maltrata y humilla a los animales, han confirmado fuentes fiscales.",
			},
		];

		//search the object who has the same id as the parameter
		updateObject = blogCards.find((element) => {
			// eslint-disable-next-line eqeqeq
			return element.id == idObject;
		});
	} else {
		updateObject = {
			imagen: "",
			titulo: "",
			descripcion: "",
			contenido: "",
			autor: "",
			fechaCreado: formatedDate,
		};
	}

	return (
		<Formik
			initialValues={{
				imagen: updateObject.imagen,
				titulo: updateObject.titulo,
				descripcion: updateObject.descripcion,
				contenido: updateObject.contenido,
				autor: updateObject.autor,
				fechaCreado: updateObject.fechaCreado,
			}}
			validate={(values) => {
				const errors = {};
				if (values.imagen.length > 0) {
					changePreviewImage(values.image);
				} else {
					errors.imagen = "Ingrese una dirección URL válida";
				}
				if (values.titulo.length > 100) {
					errors.titulo = "La cantidad de caracteres del título no debe superar los 100.";
				}
				if (values.descripcion.length > 400) {
					errors.titulo = "La cantidad de caracteres de la descripción no debe superar los 400.";
				}
				return errors;
			}}
			onSubmit={async (values) => {
				values.contenido = noticeContent;
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form className="row" style={{ padding: 0 }} id="mainForm">
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="url"
						name="imagen"
						placeholder="Ingresar URL de la foto"
						required
					/>
					<ErrorMessage className="input-error" name="imagen" component="div" />
					<div className="preview-image" id="preview-image"></div>
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field className="input col-12 col-sm-6" type="text" name="titulo" placeholder="Titulo" required />
					<ErrorMessage className="input-error" name="title" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="text"
						name="descripcion"
						placeholder="Descripcion"
						required
					/>
					<ErrorMessage className="input-error" name="descripcion" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field className="input col-12 col-sm-6" type="text" name="autor" placeholder="Autor" />
					<ErrorMessage className="input-error" name="autor" component="div" />
				</div>
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="date"
						name="fechaCreado"
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

const containsQuestionMark = (string) => {
	return string.includes("?");
};

function getData(str, separator) {
	let data = str.split(separator);
	data.shift();
	return data;
}

function getId(str, separator) {
	let idObject = str.split(separator);
	return idObject[idObject.length - 1];
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

	useEffect(() => {
		if (containsQuestionMark(location.search)) {
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
	}, [location.pathname, location.search, pageType]);

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