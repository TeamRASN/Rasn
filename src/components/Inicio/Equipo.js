/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

//Componentes
import Carousel from 'react-elastic-carousel';
import Integrante from './Tarjetas/Integrante';

//Estilos

//Objetos
const breakPoints = [
	{ width: 1, itemsToShow: 1, itemPadding: [0, 20], pagination: false },
	{ width: 400, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 650, itemsToShow: 3 },
	{ width: 1150, itemsToShow: 4 },
	{ width: 1450, itemsToShow: 5 },
	{ width: 1750, itemsToShow: 6 },
];

//Objetos
/* const memberCards = [
	{
		id: 1,
		name: 'Micaela',
		surname: 'Darrel',
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
		rol: 'Voluntaria',
	},
	{
		id: 2,
		name: 'Hernan',
		surname: 'Vargas',
		image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
		rol: 'Voluntario',
	},
	{
		id: 3,
		name: 'Paola',
		surname: 'Thomson',
		image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
		rol: 'Organizadora',
	},
	{
		id: 4,
		name: 'Miguel',
		surname: 'Fernandez',
		image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
		rol: 'Voluntario',
	},
	{
		id: 5,
		name: 'Carolina',
		surname: 'Gomez',
		image: 'https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
		rol: 'Organizadora',
	},
	{
		id: 6,
		name: 'Lucas',
		surname: 'Essandy',
		image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
		rol: 'Voluntario',
	},
	{
		id: 7,
		name: 'Uriel',
		surname: 'Franco',
		image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80',
		rol: 'Voluntario',
	},
	{
		id: 8,
		name: 'Tomas',
		surname: 'Birgo',
		image: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
		rol: 'Voluntario',
	},
]; */

const getIntegrantes = (setMemberCards, setLoadedData, firstFetch, setFirstFetch) => {
	if (firstFetch) {
		fetch('http://127.0.0.1:3001/Rasn/admin/equipo')
			.then((response) => response.json())
			.then((memberCards) => {
				setMemberCards(memberCards);
				setLoadedData(true);
				setFirstFetch(false);
			})
			.catch((error) => {
				//console.error(error)
			});
	}
};

export default function Equipo() {
	const [memberCards, setMemberCards] = useState([]);
	const [firstFetch, setFirstFetch] = useState(true);
	const [loadedData, setLoadedData] = useState(false);

	useEffect(() => {
		getIntegrantes(setMemberCards, setLoadedData, firstFetch, setFirstFetch);
		return () => {};
	}, [firstFetch, memberCards]);

	return (
		<section className="team-section">
			<div className="container pb-5 mt-5">
				<div className="row justify-content-center">
					<div className="col-12 heading-section">
						<h2>Sumate a nuestro equipo!</h2>
					</div>
				</div>
				<Carousel
					className="carousel"
					itemsToScroll={1}
					itemsToShow={3}
					enableAutoPlay
					autoPlaySpeed={2000}
					itemPadding={[10, 20]}
					breakPoints={breakPoints}
				>
					{memberCards.map(({ _id, nombre, apellido, imagen, rol }) => (
						<Integrante key={_id} name={nombre} surname={apellido} image={imagen} rol={rol} />
					))}
				</Carousel>
			</div>
		</section>
	);
}
