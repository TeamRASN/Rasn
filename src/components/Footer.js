import React from "react";

//Componentes
import Logo from "../assets/logo.svg";

//Estilos
import "../css/footer.css";

export default function Footer() {
	return (
		<footer className="footer-area">
			<div className="main-footer-area">
				<div className="container">
					<div className="row">
						{/* <!-- Footer Widget Area --> */}
						<div className="columns col-12 col-sm-6 col-lg-3">
							<div className="footer-widget">
								<div className="widget-title">
									<a href=".">
										<img src={Logo} alt="" />
									</a>
								</div>
								<p>
									Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin
									est, in euismod erat. Ut at erat et arcu pulvinar cursus a eget.
								</p>
								<div className="footer-social-info">
									<a href=".">
										<i className="fa fa-facebook"></i>
									</a>
									<a href=".">
										<i className="fa fa-twitter"></i>
									</a>
									<a href=".">
										<i className="fa fa-instagram"></i>
									</a>
								</div>
							</div>
						</div>
						{/* <!-- Footer Widget Area --> */}
						<div className="columns col-12 col-sm-6 col-lg-3">
							<div className="footer-widget">
								<div className="widget-title">
									<h6>Enlaces rápidos</h6>
								</div>
								<nav>
									<ul className="useful-links">
										<li>
											<a href="/Rasn">
												<i className="fas fa-chevron-right"></i>Inicio
											</a>
										</li>
										<li>
											<a href="/Rasn/animales#/rescatados">
												<i className="fas fa-chevron-right"></i>Rescatados
											</a>
										</li>
										<li>
											<a href="/Rasn/contacto">
												<i className="fas fa-chevron-right"></i>Contactanos
											</a>
										</li>
										<li>
											<a href="/Rasn/faq">
												<i className="fas fa-chevron-right"></i>Preguntas frecuentes
											</a>
										</li>
										<li>
											<a href="/Rasn/donativos">
												<i className="fas fa-chevron-right"></i>Donativos
											</a>
										</li>
										<li>
											<a href="/Rasn/colaboradores">
												<i className="fas fa-chevron-right"></i>Sumate
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						{/* <!-- Footer Widget Area --> */}
						<div className="columns col-12 col-sm-6 col-lg-3">
							<div className="footer-widget">
								<div className="widget-title">
									<h6>Últimas noticias</h6>
								</div>
								<div className="center-content">
									<div className="widget-content">
										<div className="footer-blog block-21 mb-4">
											<div className="text">
												<h3 className="heading">
													<a href=".">Recolección de tapas por CABA</a>
												</h3>
												<div className="meta">
													<div>Mayo 24, 2021</div>
												</div>
											</div>
										</div>
										<div className="footer-blog block-21 mb-4">
											<div className="text">
												<h3 className="heading">
													<a href=".">Sumate a la feria americana</a>
												</h3>
												<div className="meta">
													<div>Mayo 18, 2021</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Footer Widget Area --> */}
						<div className="columns col-12 col-sm-6 col-lg-3">
							<div className="footer-widget">
								<div className="center-content">
									<div className="widget-content">
										<div className="widget-title">
											<h6>Contactanos</h6>
										</div>
										<div className="single-contact d-flex mb-30">
											<i className="fas fa-map-marker-alt"></i>
											<p>4127/ 5B-C Mislane Road, Gibraltar, UK</p>
										</div>
										<div className="single-contact d-flex mb-30">
											<i className="fas fa-phone-alt"></i>
											<p>
												Main: 203-808-8613 <br />
												Office: 203-808-8648
											</p>
										</div>
										<div className="single-contact d-flex">
											<i className="fas fa-envelope-open-text"></i>
											<p>office@yourbusiness.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
