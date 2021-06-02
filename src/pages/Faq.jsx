import React, { Component } from "react";
import "../css/contacto_faq.css";

export default class Faq extends Component {
	render() {
		return (
			<div>
				<section class="first">
					<h1 class="pregunta">
						<b>¿Dónde mantenemos a las mascotas?</b>
					</h1>
					<p class="respuesta">
						Las mascotas se encuentran resguardadas en un refugio alquilado. Nuestro equipo de voluntarios
						se encarga de darles todos los cuidados necesarios, dando de su tiempo para visitar el refugio y
						asegurarse de que todo esté bien.
					</p>
				</section>

				<section class="second">
					<h1 class="pregunta">
						<b>Quiero adoptar a una de las mascotas. ¿Qué debo hacer?</b>
					</h1>
					<p class="respuesta">
						Si quieres adoptar a una de las mascotas, puedes contactarte con nosotros usando la opción
						"Contacto Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales, que
						también encontrarás en este sitio. Te responderemos a la brevedad para que tengas toda la
						información sobre la mascota.
					</p>
				</section>

				<section class="third">
					<h1 class="pregunta">
						<b>Quiero ayudar como voluntario. ¿Qué debo hacer?</b>
					</h1>
					<p class="respuesta">
						Si quieres formar parte de nuestro equipo, contáctate con nosotros usando la opción "Contacto
						Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales. Por favor
						infórmanos tu nombre y edad. Uno de los miembros de nuestro equipo se contactará con vos para
						acordar un horario en que puedas colaborar.
					</p>
				</section>
			</div>
		);
	}
}
