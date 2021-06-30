import React from "react";
import { Link } from "react-router-dom";

// Componentes
import Arrow from "../assets/iconos/login-arrow.svg";
import DogIcon from "../assets/iconos/dog.svg";
import ManteinmentIcon from "../assets/iconos/manteinment.svg";
import StatsIcon from "../assets/iconos/stats.svg";
import WritingIcon from "../assets/iconos/writing.svg";

// Estilos
import "../css/login.css";

export default function Login() {
	return (
		<div className="login-page">
			<div className="jumpboton hidder-layout">
				<div className="container row">
					<div className="login-card-container col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
						<div className="image-login-container">
							<div className="illustration-container">
								<div className="animated-image" id="algo">
									<img className="dogIcon" src={DogIcon} alt="Dog Icon" />
									<img className="manteinmentIcon" src={ManteinmentIcon} alt="Manteinment Icon" />
									<img className="statsIcon" src={StatsIcon} alt="Stats Icon" />
									<img className="writingIcon" src={WritingIcon} alt="Writing Icon" />
								</div>
							</div>
							<img className="arrow-separator" src={Arrow} alt="" />
						</div>
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
										type="text"
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
									<Link to="/admin/estadisticas">Iniciar Sesión</Link>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
