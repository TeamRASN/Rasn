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
											<a href=".">Inicio</a>
										</li>
										<li>
											<p>Animales</p>
											<ul>
												<li>
													<a href=".">Rescatados</a>
												</li>
											</ul>
										</li>
										<li>
											<a href=".">Contactanos</a>
										</li>
										<li>
											<p>Involucrate</p>
											<ul>
												<li>
													<a href=".">Donativos</a>
												</li>
												<li>
													<a href=".">Voluntarios y asociados</a>
												</li>
											</ul>
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
								<div className="footer-blog block-21 mb-4">
									<div className="text">
										<h3 className="heading">
											<a href=".">Even the all-powerful Pointing has no control about</a>
										</h3>
										<div className="meta">
											<div>
												<a href=".">
													<span className="icon-calendar"></span> July 12, 2018
												</a>
											</div>
											<div>
												<a href=".">
													<span className="icon-person"></span> Admin
												</a>
											</div>
											<div>
												<a href=".">
													<span className="icon-chat"></span> 19
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Footer Widget Area --> */}
						<div className="columns col-12 col-sm-6 col-lg-3">
							<div className="footer-widget">
								<div className="widget-title">
									<h6>Contactanos</h6>
								</div>
								<div className="single-contact d-flex mb-30">
									<i className="icon-placeholder"></i>
									<p>4127/ 5B-C Mislane Road, Gibraltar, UK</p>
								</div>
								<div className="single-contact d-flex mb-30">
									<i className="icon-telephone-1"></i>
									<p>
										Main: 203-808-8613 <br />
										Office: 203-808-8648
									</p>
								</div>
								<div className="single-contact d-flex">
									<i className="icon-contract"></i>
									<p>office@yourbusiness.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
