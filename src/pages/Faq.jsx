/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// Componentes
import FaqCard from '../components/faq/faqCard';

// Estilos
import '../css/faq.css';

const getFaqs = (setFaqCards, setLoadedData, firstFetch, setFirstFetch) => {
	if (firstFetch) {
		fetch('http://127.0.0.1:3001/Rasn/admin/faq')
			.then((response) => response.json())
			.then((faqCards) => {
				setFaqCards(faqCards);
				setLoadedData(true);
				setFirstFetch(false);
			})
			.catch((error) => {
				//console.error(error)
			});
	}
};

export default function Faq() {
	const [faqCards, setFaqCards] = useState([]);
	const [firstFetch, setFirstFetch] = useState(true);
	const [loadedData, setLoadedData] = useState(false);

	useEffect(() => {
		getFaqs(setFaqCards, setLoadedData, firstFetch, setFirstFetch);
		const preguntas = document.querySelectorAll('.faq-card');

		preguntas.forEach((pregunta) => {
			//* Espera el evento click a cada una de las preguntas para añadir o eliminar las clases que permiten la expansión de la respuesta
			pregunta.addEventListener('click', (e) => {
				e.currentTarget.classList.toggle('show');
				e.currentTarget.classList.toggle('hidden');

				//* Obtiene la altura de la respuesta y se la aplica o remueve como estilo al contenedor de la respuesta
				pregunta.querySelectorAll('.respuesta').forEach((e) => {
					const realHeight = e.scrollHeight;

					if (!e.style.maxHeight) {
						e.style.maxHeight = realHeight + 'px';
					} else {
						e.style.maxHeight = null;
					}
				});
			});
		});
	}, [firstFetch]);

	//? Variables para la separación de preguntas
	const halfContent = Math.round(faqCards.length / 2);
	let faqCardsFirst = [];
	let faqCardsSecond = [];

	//* Se asigna la primera mitad de las preguntas a esta coleccion
	for (let index = 0; index < halfContent; index++) {
		faqCardsFirst.push(faqCards[index]);
	}

	//* Se asigna la segunda mitad de las preguntas a esta coleccion
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
					{faqCardsSecond.map(({ _id, pregunta, respuesta }) => (
						<FaqCard key={_id} pregunta={pregunta} respuesta={respuesta} />
					))}
				</div>
			</div>
		</section>
	);
}
