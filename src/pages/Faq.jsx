import React, { useEffect } from "react";

// Componentes
import FaqCard from "../components/faq/faqCard";

// Estilos
import "../css/faq.css";

// Objetos
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
	{
		id: 4,
		pregunta: "¿Cómo logramos financiar el refugio?",
		respuesta:
			"Las mascotas se encuentran resguardadas en un refugio alquilado. Nuestro equipo de voluntarios se encarga de darles todos los cuidados necesarios, dando de su tiempo para visitar el refugio y asegurarse de que todo esté bien.",
	},
	{
		id: 5,
		pregunta: "Tengo errores al contactarme con los organizadores.",
		respuesta:
			'Si quieres adoptar a una de las mascotas, puedes contactarte con nosotros usando la opción "Contacto Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales, que también encontrarás en este sitio. Te responderemos a la brevedad para que tengas toda la información sobre la mascota.',
	},
	{
		id: 6,
		pregunta: "¿Qué hacemos con los animales ya adoptados?",
		respuesta:
			'Si quieres formar parte de nuestro equipo, contáctate con nosotros usando la opción "Contacto Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales. Por favor infórmanos tu nombre y edad. Uno de los miembros de nuestro equipo se contactará con vos para acordar un horario en que puedas colaborar.',
	},
	{
		id: 7,
		pregunta: "¿Qué hacemos con los animales ya adoptados?",
		respuesta:
			'Si quieres formar parte de nuestro equipo, contáctate con nosotros usando la opción "Contacto Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales. Por favor infórmanos tu nombre y edad. Uno de los miembros de nuestro equipo se contactará con vos para acordar un horario en que puedas colaborar.',
	},
];

export default function Faq() {
	useEffect(() => {
		const preguntas = document.querySelectorAll(".faq-card");

		preguntas.forEach((pregunta) => {
			pregunta.addEventListener("click", (e) => {
				e.currentTarget.classList.toggle("show");
				e.currentTarget.classList.toggle("hidden");

				pregunta.querySelectorAll(".respuesta").forEach((e) => {
					const realHeight = e.scrollHeight;

					if (!e.style.maxHeight) {
						e.style.maxHeight = realHeight + "px";
					} else {
						e.style.maxHeight = null;
					}
				});
			});
		});
	});

	const halfContent = Math.round(faqCards.length / 2);
	let faqCardsFirst = [];
	let faqCardsSecond = [];

	for (let index = 0; index < halfContent; index++) {
		faqCardsFirst.push(faqCards[index]);
	}

	for (let index = halfContent; index < faqCards.length; index++) {
		faqCardsSecond.push(faqCards[index]);
	}

	return (
		<section className="faq-page container">
			<h1 className="faq-header border-bottom">Preguntas Frecuentas</h1>
			<div className="faq-cards-container">
				<div className="col-12 col-sm-6">
					{faqCardsFirst.map(({ id, pregunta, respuesta }) => (
						<FaqCard pregunta={pregunta} respuesta={respuesta} key={id} />
					))}
				</div>
				<div className="col-12 col-sm-6">
					{faqCardsSecond.map(({ id, pregunta, respuesta }) => (
						<FaqCard pregunta={pregunta} respuesta={respuesta} key={id} />
					))}
				</div>
			</div>
		</section>
	);
}
