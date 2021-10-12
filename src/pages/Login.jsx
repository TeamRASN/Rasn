import React, { useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios';

// Componentes
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Arrow from "../assets/iconos/login-arrow.svg";
import DogIcon from "../assets/iconos/dog.svg";
import ManteinmentIcon from "../assets/iconos/manteinment.svg";
import StatsIcon from "../assets/iconos/stats.svg";
import WritingIcon from "../assets/iconos/writing.svg";

// Estilos
import "../css/login.css";
export default function Login() {
	const history = useHistory();
	const sendLogin = (e) =>{ e.preventDefault(); };
	//* Estado correspondiente al tamaño de la lista de la animación
	const [iconListWidth, setIconListWidth] = useState(0);

	//? Cambia el estado de iconListWidth por el tamaño del ancho de la lista que contiene los iconos de la animación
	const changeIconListWidth = () => {
		const listIcons = document.getElementById("icon-list");
		setIconListWidth(listIcons.clientWidth);
	};
	
	useEffect(() => {
		//* changeIconListWidth() Se encarga de aplicar la animacióon slideshow a la lista de iconos
		changeIconListWidth();

		//* Consigue el ancho restante del contenedor para centrar el icono y que ocupe todo el espacio de la lista, creando un contenedor con 4
		//* iconos que cuadripliquen el espacio original del contenedor original.
		let totalWidth = iconListWidth - 100;
		let realWidth = totalWidth / 2;
		const iconos = document.querySelectorAll(".animation-icon");

		//? Aplica el espacio restante como márgenes a cada uno de los elementos de la animación
		iconos.forEach((e) => {
			e.style.margin = `0px ${realWidth}px`;
		});


		//? Aplica al contenedor una animación con keyframes para que se mueva de izquierda a derecha alternando entre cada extremo
		const listIcons = document.getElementById("icon-list");
		listIcons.animate(
			[
				{
					transform: `translateX(0px)`,
					offset: 0,
				},
				{
					transform: `translateX(0px)`,
					offset: 0.05,
				},
				{
					transform: `translateX(-${iconListWidth}px)`,
					offset: 0.33,
				},
				{
					transform: `translateX(-${iconListWidth * 2}px)`,
					offset: 0.66,
				},
				{
					transform: `translateX(-${iconListWidth * 3}px)`,
					offset: 0.95,
				},
				{
					transform: `translateX(-${iconListWidth * 3}px)`,
					offset: 1,
				},
			],
			{
				duration: 15000,
				fill: "forwards",
				delay: -2750,
				direction: "alternate",
				easing: "ease-in-out",
				iterations: Infinity,
			}
		);

		return () => {
			//Remueve el evento al desmontar la función
			window.removeEventListener("resize", changeIconListWidth);
		};
	}, [iconListWidth]);
	return (
		<div className="login-page">
			<div className="login-content">
				<div className="container row">
					<div className="login-card-container col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
						<div className="image-login-container">
							<div className="illustration-container">
								<div className="animated-image" id="icon-list">
									<img className="animation-icon dogIcon" src={DogIcon} alt="Dog Icon" />
									<img
										className="animation-icon manteinmentIcon"
										src={ManteinmentIcon}
										alt="Manteinment Icon"
									/>
									<img className="animation-icon statsIcon" src={StatsIcon} alt="Stats Icon" />
									<img className="animation-icon writingIcon" src={WritingIcon} alt="Writing Icon" />
								</div>
							</div>
							<img className="arrow-separator" src={Arrow} alt="" />
						</div>
						<Formik
				initialValues={{ email: '', password: '' }}
				validate={(values) => {
					const errors = {};
					//? Validación de correo electrónico.
					if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = 'Correo electrónico inválido';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(false);
					alert("A");
					/* Axios.post('http://localhost:3001/Frontend_Comunicados_ET32/login', values).then((res) => {
						console.log();
						if (res.data.status === 'success') {
							res.data.email = values.email;
							localStorage.setItem('user-token', JSON.stringify(res.data.sessionID, res.data.email));
							localStorage.setItem('user-email', JSON.stringify(res.data.email));
							history.push('/home');
						} else {
							const messageContainer = document.getElementById('message-container');
							messageContainer.innerText = res.data;
							setTimeout(() => {
								messageContainer.innerText = '';
							}, 2500);
						}
					}); */
				}}
			>
				<Form className="login-form">
					<div>
						<div className="form-input-container">
							<Field
								className="login-form-input"
								style={{ marginTop: '0px' }}
								type="email"
								name="email"
								placeholder="Correo Electronico"
								required
							/>
							<ErrorMessage className="input-error" name="email" component="div" />
						</div>
						<div className="form-input-container">
							<div className="form-password-container login-form-input">
								<Field
									className="form-password-input"
									/* type={seePassword ? 'text' : 'password'} */
									name="password"
									placeholder="Contraseña"
									required
								/>
								{/* <Icon
									className="form-eye-icon"
									icon={seePassword ? 'eye-slash' : 'eye'}
									onClick={showPassword}
								/> */}
							</div>
							<ErrorMessage className="input-error" name="password" component="div" />
						</div>
						<div className="session-validate-message" id="message-container"></div>
						<button type="submit" className="enter-btn">
							Ingresar
						</button>
						<div className="form-forgot-keep-container">
							<div className="form-keep-login">
								<input type="checkbox" name="keep-login"></input>
								<label className="form-keep-login-label" htmlFor="keep-login">
									Mantener sesión iniciada
								</label>
							</div>
							<span className="form-forgot-password" /* onClick={() => changeForm('RecoverPassword')} */>
								¿Olvidaste tu contraseña?
							</span>
						</div>
						<div className="login-form-divisor" style={{ marginBottom: '0px', marginTop: '0px' }}>
							<div className="divisor-text">
								<p className="form-register-text">
									¿Aún no tenés una cuenta?{' '}
									{/* <span onClick={() => changeForm('Register')}>Registrate</span> */}
								</p>
							</div>
						</div>
					</div>
				</Form>
			</Formik>{/* 
						<div className="inputs-container">
							<form method="post" className="row new-register-form login-form">
								<div className="register-input-field col-12">
									<input
										className="input"
										type="text"
										name="email"
										placeholder="Correo electrónico"
										required
									/>
								</div>
								<div className="register-input-field col-12">
									<input
										className="input"
										type="password"
										name="contraseña"
										placeholder="Contraseña"
										required
									/>
								</div>
								<label>
									<input type="checkbox" name="remember-login" className="remember-login" />
									Recordarme en este dispositivo
								</label>
								<div className="submit-btn">
								
							
							
							<Link to="/admin/estadisticas" onClick ={sendLogin} >Iniciar Sesión</Link>

								</div>
								<div className="cancel-btn">
									<a href="/Rasn">Volver</a>
								</div>
								<p className="register-advice">
									¿AÚN NO TENÉS TU CUENTA ADMINISTRATIVA?
									<span>
										<a href="/">SOLICITÁ UNA</a>
									</span>
								</p>
							</form>
						</div>*/}
					</div>
				</div> 
			</div>
		</div>
	);
}
