import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Axios from 'axios';

// Componentes
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Field, Form, ErrorMessage } from 'formik';

//Estilos
import '../../../css/nuevo-registro.css';

//Paquetes
function animalesForm() {
	let updateObject;
	let insertData = true;
	const pathname = window.location.search;
	if (containsQuestionMark(pathname)) {
		insertData = false;
		const animalData = getData(pathname, '?');

		let str = '{';
		let tempStr;
		animalData.forEach((e) => {
			if (!e.includes('https')) {
				str += `"${e.split('=')[0]}":"${e.split('=')[1]}",`;
			} else {
				let first = e.indexOf('=');
				tempStr = `"${e.slice(0, first)}":"${e.slice(first + 1)}",`;
				str += tempStr;
			}
		});
		str = str.substring(0, str.length - 1);
		str += '}';

		updateObject = JSON.parse(decodeURIComponent(str));
		updateObject.peso = parseInt(updateObject.peso);
	} else {
		updateObject = {
			nombre: '',
			color: '',
			sexo: '',
			peso: '',
			fechaNacimiento: '',
			raza: '',
			tamanio: '',
			estado: '',
			actitud: '',
			imagen: '',
		};
	}

	function changePreviewImage(imagen) {
		const previewImage = document.getElementById('preview-image');
		previewImage.style.backgroundImage = `url(${imagen})`;
		previewImage.style.display = 'block';
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

				if (values.sexo === 'Macho') {
					values.sexo = 'M';
				} else if (values.sexo === 'Hembra') {
					values.sexo = 'F';
				} else if (values.sexo !== 'M' && values.sexo !== 'F') {
					errors.sexo = 'Ingrese un caracter M o F';
				}
				if (values.imagen !== undefined) {
					if (values.imagen.length > 0) {
						changePreviewImage(values.imagen);
					} else {
						const previewImage = document.getElementById('preview-image');
						previewImage.style.display = 'none';
						errors.image = 'Ingrese una dirección URL válida';
					}
				}

				return errors;
			}}
			onSubmit={async (values) => {
				console.log(insertData);
				if (insertData) {
					Axios.post('http://localhost:3001/Rasn/admin/animales/nuevo-animal', values)
						.then((res) => {
							console.log(res.data);
						})
						.then(alert('Registro ingresado'));
				} else {
					Axios.post('http://localhost:3001/Rasn/admin/animales/actualizar-animal', values)
						.then((res) => {
							console.log(res.data);
						})
						.then(alert('Registro actualizado'));
				}
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
							e.currentTarget.type = 'date';
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
	let insertData = true;
	const pathname = window.location.search;
	if (containsQuestionMark(pathname)) {
		insertData = false;
		const memberCards = getData(pathname, '?');

		let str = '{';
		let tempStr;
		memberCards.forEach((e) => {
			if (!e.includes('https')) {
				str += `"${e.split('=')[0]}":"${e.split('=')[1]}",`;
			} else {
				let first = e.indexOf('=');
				tempStr = `"${e.slice(0, first)}":"${e.slice(first + 1)}",`;
				str += tempStr;
			}
		});
		str = str.substring(0, str.length - 1);
		str += '}';

		updateObject = JSON.parse(decodeURIComponent(str));
		updateObject.peso = parseInt(updateObject.peso);
	} else {
		updateObject = {
			id: '',
			imagen: '',
			nombre: '',
			apellido: '',
			rol: '',
		};
	}

	function changePreviewImage(imagen) {
		const previewImage = document.getElementById('preview-image');
		previewImage.style.backgroundImage = `url(${imagen})`;
		previewImage.style.display = 'block';
	}

	return (
		<Formik
			initialValues={{
				id: updateObject.id,
				imagen: updateObject.imagen,
				nombre: updateObject.nombre,
				apellido: updateObject.apellido,
				rol: updateObject.rol,
			}}
			validate={(values) => {
				const errors = {};
				if (values.imagen.length > 0) {
					changePreviewImage(values.imagen);
				} else {
					const previewImage = document.getElementById('preview-image');
					previewImage.style.display = 'none';
					errors.imagen = 'Ingrese una dirección URL válida';
				}
				if (values.nombre !== undefined) {
					if (values.nombre.length > 20 || values.nombre.length < 3) {
						errors.nombre = 'Escriba un nombre entre 3 y 20 caracteres.';
					}
				}

				if (values.apellido !== undefined) {
					if (values.apellido.length > 15 || values.apellido.length < 4) {
						errors.apellido = 'Escriba un apellido entre 4 y 15 caracteres.';
					}
				}

				return errors;
			}}
			onSubmit={async (values) => {
				console.log(insertData);
				if (insertData) {
					Axios.post('http://localhost:3001/Rasn/admin/equipo/nuevo-miembro', values)
						.then((res) => {
							console.log(res.data);
						})
						.then(alert('Registro ingresado'));
				} else {
					Axios.post('http://localhost:3001/Rasn/admin/equipo/actualizar-miembro', values)
						.then((res) => {
							console.log(res.data);
						})
						.then(alert('Registro actualizado'));
				}
			}}
		>
			<Form className="row" style={{ padding: 0 }} id="mainForm">
				<div className="register-input-field col-12 col-sm-6">
					<Field
						className="input col-12 col-sm-6"
						type="url"
						name="imagen"
						placeholder="Ingresar URL de la foto"
						id="imagen"
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
	let insertData = true;
	const pathname = window.location.search;
	if (containsQuestionMark(pathname)) {
		insertData = false;
		const faqCards = getData(pathname, '?');

		let str = '{';
		let tempStr;
		faqCards.forEach((e) => {
			if (!e.includes('https')) {
				str += `"${e.split('=')[0]}":"${e.split('=')[1]}",`;
			} else {
				let first = e.indexOf('=');
				tempStr = `"${e.slice(0, first)}":"${e.slice(first + 1)}",`;
				str += tempStr;
			}
		});
		str = str.substring(0, str.length - 1);
		str += '}';

		updateObject = JSON.parse(decodeURIComponent(str));
		updateObject.peso = parseInt(updateObject.peso);
	} else {
		updateObject = {
			id: '',
			pregunta: '',
			respuesta: '',
		};
	}

	return (
		<Formik
			initialValues={{
				id: updateObject.id,
				pregunta: updateObject.pregunta,
				respuesta: updateObject.respuesta,
			}}
			validate={(values) => {
				const errors = {};
				if (values.pregunta.length > 150) {
					errors.pregunta = 'Formule una pregunta con menos de 150 caracteres';
				}
				if (values.respuesta.length > 300) {
					errors.pregunta = 'Redacte una respuesta con menos de 300 caracteres';
				}
				return errors;
			}}
			onSubmit={async (values, updateObject) => {
				if (insertData) {
					Axios.post('http://localhost:3001/Rasn/admin/faq/nueva-pregunta', values)
						.then((res) => {
							console.log(res.data);
						})
						.then(alert('Registro ingresado'));
				} else {
					console.log(updateObject);
					console.log(values.id);
					if (updateObject.pregunta !== values.pregunta && updateObject.pregunta !== values.pregunta) {
						Axios.post('http://localhost:3001/Rasn/admin/faq/actualizar-pregunta', values)
							.then((res) => {
								console.log(res.data);
							})
							.then(alert('Registro actualizado'));
					} else {
						alert('No hay cambios en los registros');
					}
				}
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

	function changePreviewImage(imagen) {
		const previewImage = document.getElementById('preview-image');
		previewImage.style.backgroundImage = `url(${imagen})`;
		previewImage.style.display = 'block';
	}

	let noticeContent;
	let updateObject;
	let insertData = true;
	const pathname = window.location.search;
	if (containsQuestionMark(pathname)) {
		insertData = false;
		const faqCards = getData(pathname, '?');

		let str = '{';
		let tempStr;
		faqCards.forEach((e) => {
			if (!e.includes('https')) {
				str += `"${e.split('=')[0]}":"${e.split('=')[1]}",`;
			} else {
				let first = e.indexOf('=');
				tempStr = `"${e.slice(0, first)}":"${e.slice(first + 1)}",`;
				str += tempStr;
			}
		});
		str = str.substring(0, str.length - 1);
		str += '}';

		updateObject = JSON.parse(decodeURIComponent(str));
	} else {
		updateObject = {
			id: '',
			imagen: '',
			titulo: '',
			descripcion: '',
			texto: '',
			autor: '',
			fecha: formatedDate,
		};
	}

	return (
		<Formik
			initialValues={{
				id: updateObject.id,
				imagen: updateObject.imagen,
				titulo: updateObject.titulo,
				descripcion: updateObject.descripcion,
				texto: updateObject.texto,
				autor: updateObject.autor,
				fecha: updateObject.fecha,
			}}
			validate={(values) => {
				const errors = {};
				if (values.imagen.length > 0) {
					changePreviewImage(values.imagen);
				} else {
					errors.imagen = 'Ingrese una dirección URL válida';
				}
				if (values.titulo.length > 100) {
					errors.titulo = 'La cantidad de caracteres del título no debe superar los 100.';
				}
				if (values.descripcion.length > 400) {
					errors.titulo = 'La cantidad de caracteres de la descripción no debe superar los 400.';
				}
				return errors;
			}}
			onSubmit={async (values) => {
				values.texto = noticeContent;
				console.log(values);
				if (insertData) {
					Axios.post('http://localhost:3001/Rasn/admin/blogs/nuevo-blog', values)
						.then((res) => {
							console.log(res.data);
						})
						.then(alert('Registro ingresado'));
				} else {
					Axios.post('http://localhost:3001/Rasn/admin/blogs/actualizar-blog', values)
						.then((res) => {
							console.log(res.data);
						})
						.then(alert('Registro actualizado'));
				}
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
						name="fecha"
						value={updateObject.fecha}
						disabled
					/>
				</div>
				<CKEditor
					style={{ width: '100%' }}
					editor={ClassicEditor}
					data={updateObject.texto}
					onChange={(event, editor) => {
						const data = editor.getData();

						noticeContent = data;
					}}
				/>
				<button id="btn-submit-form" type="submit" className="invisible-btn"></button>
			</Form>
		</Formik>
	);
}

const containsQuestionMark = (string) => {
	return string.includes('?');
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
	const [pageType, setPageType] = useState('Ingresar');
	let location = useLocation();
	const history = useHistory();

	const sendForm = () => {
		let mainForm = document.getElementById('btn-submit-form');
		mainForm.click();
	};

	useEffect(() => {
		if (containsQuestionMark(location.search)) {
			setPageType('Modificar');
		}

		let tempUrl;
		if (location.pathname.includes('/equipo/nuevo-miembro')) {
			tempUrl = '/equipo/nuevo-miembro';
		} else if (location.pathname.includes('/faq/nueva-pregunta')) {
			tempUrl = '/faq/nueva-pregunta';
		} else if (location.pathname.includes('/blogs/nuevo-post')) {
			tempUrl = '/blogs/nuevo-post';
		} else if (location.pathname.includes('/animales/nuevo-animal')) {
			tempUrl = '/animales/nuevo-animal';
		}

		//* Asigna el paquete de inputs correspondiente a la ventana
		switch (tempUrl) {
			case '/equipo/nuevo-miembro':
				setPaquete(equipoForm());
				setPaqueteHeader('integrante');
				break;
			case '/faq/nueva-pregunta':
				setPaquete(faqForm());
				setPaqueteHeader('pregunta y respuesta');
				break;
			case '/blogs/nuevo-post':
				setPaquete(blogsForm());
				setPaqueteHeader('blog');
				break;
			case '/animales/nuevo-animal':
				setPaquete(animalesForm());
				setPaqueteHeader('animal');
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
						onClick={() => history.push(`/${location.pathname.split('/')[1]}`)}
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
