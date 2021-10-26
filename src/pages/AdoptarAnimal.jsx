/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

// Componentes
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Field, Form, ErrorMessage } from 'formik';

//Estilos
import '../css/adoptar-animal.css';

function getId(str, separator) {
	let idObject = str.split(separator);
	return idObject[idObject.length - 1];
}

const ContactForm = () => {
	return (
		<div className="first-step-form row">
			<div className="register-input-field col-12 col-sm-6">
				<Field className="input col-12 col-sm-6" type="text" name="nombre" placeholder="Nombre" required />
				<ErrorMessage className="input-error" name="nombre" component="div" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<Field className="input col-12 col-sm-6" type="text" name="apellido" placeholder="Apellido" required />
				<ErrorMessage className="input-error" name="apellido" component="div" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<Field
					className="input col-12 col-sm-6"
					type="tel"
					name="telefono"
					placeholder="Teléfono celular"
					required
				/>
				<ErrorMessage className="input-error" name="telefono" component="div" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<Field
					className="input col-12 col-sm-6"
					type="email"
					name="email"
					placeholder="Correo electrónico"
					required
				/>
				<ErrorMessage className="input-error" name="email" component="div" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<Field
					className="input col-12 col-sm-6"
					type="text"
					name="residencia"
					placeholder="Zona de residencia"
					required
				/>
				<ErrorMessage className="input-error" name="residencia" component="div" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<Field
					className="input col-12 col-sm-6"
					type="text"
					name="direccion"
					placeholder="Dirección"
					required
				/>
				<ErrorMessage className="input-error" name="direccion" component="div" />
			</div>
		</div>
	);
};

const PersonalInformationForm = () => {
	return (
		<div className="first-step-form row">
			<div className="register-input-field col-12 col-sm-6">
				<Field className="input col-12 col-sm-6" type="text" name="ocupacion" placeholder="Ocupación" />
				<ErrorMessage className="input-error" name="ocupacion" component="div" />
			</div>
			<div className="register-input-field col-12 col-sm-6">
				<Field className="input col-12 col-sm-6" type="text" name="edad" placeholder="Edad" required />
				<ErrorMessage className="input-error" name="edad" component="div" />
			</div>
			<div className="register-input-field col-12">
				<Field
					className="input col-12"
					name="pregunta1"
					placeholder="¿El animal que busca es para compañía, guardia, trabajo...?"
					component="textarea"
				/>
				<ErrorMessage className="input-error" name="pregunta1" component="div" />
			</div>
		</div>
	);
};

const AnimalHomeForm = () => {
	return (
		<div className="first-step-form row">
			<div className="register-input-field col-12">
				<Field
					className="input col-12"
					name="pregunta2"
					placeholder="¿Dónde vivirá el animal adoptado?"
					component="textarea"
				/>
				<ErrorMessage className="input-error" name="pregunta2" component="div" />
			</div>
			<div className="register-input-field col-12">
				<Field
					className="input col-12"
					name="pregunta3"
					placeholder="¿Hay niños en la casa? ¿De qué edad?"
					component="textarea"
				/>
				<ErrorMessage className="input-error" name="pregunta3" component="div" />
			</div>
			<div className="register-input-field col-12">
				<Field
					className="input col-12"
					name="pregunta4"
					placeholder="¿Hay otros animales en la casa?"
					component="textarea"
				/>
				<ErrorMessage className="input-error" name="pregunta4" component="div" />
			</div>
			<div className="register-input-field col-12">
				<Field
					className="input col-12"
					name="pregunta5"
					placeholder="¿Posee algún espacio al aire libre? (balcón, terraza, patio, etc)"
					component="textarea"
				/>
				<ErrorMessage className="input-error" name="pregunta5" component="div" />
			</div>
			<div className="register-input-field col-12">
				<Field
					className="input col-12"
					name="pregunta6"
					placeholder="¿Conoce los gastos y cuidados que implicará incorporar un animal y está dispuesto a asumirlos?"
					component="textarea"
				/>
				<ErrorMessage className="input-error" name="pregunta6" component="div" />
			</div>
			<div id="my-radio-group">¿Ha experimentado tener un animal de compañía?</div>
			<br />
			<div role="group" style={{ marginTop: '10px' }} aria-labelledby="my-radio-group">
				<label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<Field type="radio" name="pregunta7" value="Si" />
					<p style={{ marginLeft: '10px' }}>Sí</p>
				</label>
				<label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<Field type="radio" name="pregunta7" value="No" />
					<p style={{ marginLeft: '10px' }}>No</p>
				</label>
				<ErrorMessage className="input-error" name="pregunta7" component="div" />
			</div>
		</div>
	);
};

export default function AdoptarAnimal() {
	const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
	const [stepForm, setStepForm] = useState(1);
	const pathname = window.location.search;
	const idAnimal = getId(pathname, '=');

	const changeDisplay = () => {
		setDisplayWidth(window.innerWidth);
	};

	const backStepForm = () => {
		const backStepMarker = document.getElementById(`step-marker${stepForm - 1}`);
		const stepMarker = document.getElementById(`step-marker${stepForm}`);
		if (stepForm > 1 && stepForm <= 3) {
			stepMarker.classList.remove('step-marker-container-active');
			stepMarker.classList.remove('step-marker-container-completed');
			backStepMarker.classList.remove('step-marker-container-completed');
			backStepMarker.classList.add('step-marker-container-active');
			setStepForm(stepForm - 1);
		}
	};

	const nextStepForm = (errors) => {
		const errorsCount = Object.keys(errors).length;

		if (errorsCount === 0) {
			const stepMarker = document.getElementById(`step-marker${stepForm + 1}`);
			const backStepMarker = document.getElementById(`step-marker${stepForm}`);
			if (stepForm >= 1 && stepForm < 3) {
				setStepForm(stepForm + 1);
				stepMarker.classList.add('step-marker-container-active');
				backStepMarker.classList.add('step-marker-container-completed');
			}
		}
	};

	const submitForm = () => {
		const adoptFormBtn = document.getElementById('adopt-form-btn');
		adoptFormBtn.click();
	};

	const validateFields = (values) => {
		let errors = {};
		if (stepForm === 1) {
			if (!values.nombre) {
				errors.nombre = 'Este campo es obligatorio';
			}
			if (!values.apellido) {
				errors.apellido = 'Este campo es obligatorio';
			}
			if (!values.telefono) {
				errors.telefono = 'Este campo es obligatorio';
			}
			if (!values.email) {
				errors.email = 'Este campo es obligatorio';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Email inválido';
			}
			if (!values.residencia) {
				errors.residencia = 'Este campo es obligatorio';
			}
			if (!values.direccion) {
				errors.direccion = 'Este campo es obligatorio';
			}
		}
		if (stepForm === 2) {
			if (!values.ocupacion) {
				errors.ocupacion = 'Este campo es obligatorio';
			}
			if (!values.edad) {
				errors.edad = 'Este campo es obligatorio';
			}
			if (!values.pregunta1) {
				errors.pregunta1 = 'Este campo es obligatorio';
			}
		}
		if (stepForm === 3) {
			if (!values.pregunta2) {
				errors.pregunta2 = 'Este campo es obligatorio';
			}
			if (!values.pregunta3) {
				errors.pregunta3 = 'Este campo es obligatorio';
			}
			if (!values.pregunta4) {
				errors.pregunta4 = 'Este campo es obligatorio';
			}
			if (!values.pregunta5) {
				errors.pregunta5 = 'Este campo es obligatorio';
			}
			if (!values.pregunta6) {
				errors.pregunta6 = 'Este campo es obligatorio';
			}
			if (!values.pregunta7) {
				errors.pregunta7 = 'Este campo es obligatorio';
			}
		}
		return errors;
	};

	useEffect(() => {
		const bodyTag = document.getElementsByTagName('body')[0];
		bodyTag.style.overflowY = null;

		if (stepForm === 1) {
			const nombreInput = document.getElementsByName('nombre')[0];
			nombreInput.focus();
		} else if (stepForm === 2) {
			const ocupacionInput = document.getElementsByName('ocupacion')[0];
			ocupacionInput.focus();
		} else if (stepForm === 3) {
			const pregunta2Input = document.getElementsByName('pregunta2')[0];
			pregunta2Input.focus();
		}

		const nextFormBtn = document.getElementById('next-form-btn');
		if (stepForm === 3) {
			nextFormBtn.innerHTML = 'Enviar';
		} else {
			nextFormBtn.innerHTML = 'Siguiente';
		}

		window.addEventListener('resize', changeDisplay);
		return () => {
			//Remueve el evento al desmontar la función
			window.removeEventListener('resize', changeDisplay);
		};
	}, [displayWidth, stepForm]);

	return (
		<div className="container adopt-container">
			<div className="adopt-form-progress-bar">
				<div id="step-marker1" className="step-marker-container step-marker-container-active">
					1
				</div>
				<div id="step-marker2" className="step-marker-container">
					2
				</div>
				<div id="step-marker3" className="step-marker-container">
					3
				</div>
			</div>
			<h2 className="contact-header">
				{stepForm === 1 && 'Datos de contacto'}
				{stepForm === 2 && 'Información personal'}
				{stepForm === 3 && 'Futuro hogar y cuidados'}
			</h2>
			<Formik
				initialValues={{
					id: idAnimal,
					nombre: '',
					apellido: '',
					telefono: '',
					email: '',
					residencia: '',
					direccion: '',
					ocupacion: '',
					edad: '',
					pregunta1: '',
					pregunta2: '',
					pregunta3: '',
					pregunta4: '',
					pregunta5: '',
					pregunta6: '',
					pregunta7: '',
				}}
				validate={(values) => {
					const errors = validateFields(values);
					return errors;
				}}
				onSubmit={async (values) => {
					alert(JSON.stringify(values, null, 2));
					 Axios.post('http://localhost:3001/Rasn/admin/faq/nueva-pregunta', values)
							.then((res) => {
								console.log(res.data);
							})
							.then(alert('Registro ingresado')); 
				}}
			>
				{({ errors, validateForm }) => (
					<Form className="adopt-form new-register-form">
						<div className="subform-fields ">
							{stepForm === 1 && <ContactForm />}
							{stepForm === 2 && <PersonalInformationForm />}
							{stepForm === 3 && <AnimalHomeForm />}
						</div>

						<div className="adopt-form-btn-container">
							<div className="col-12 col-sm-5 col-md-2 back-form-btn" onClick={backStepForm}>
								Atrás
							</div>
							<div
								id="next-form-btn"
								className="col-12 col-sm-5 col-md-2 next-form-btn"
								onClick={
									stepForm < 3
										? () => {
												validateForm().then(nextStepForm(errors));
										  }
										: submitForm
								}
							>
								Siguiente
							</div>
						</div>
						<button type="submit" id="adopt-form-btn" className="invisible-btn"></button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
