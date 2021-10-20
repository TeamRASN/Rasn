import React, { useEffect, useState } from 'react';
import Card from './Card';

//Componenetes
import Mia from '../../assets/Mia.jpg';
import Dog from '../../assets/Dog.jpg';
import Dog2 from '../../assets/organizacion.jpg';

//Estilos
import '../../css/mascotas.css';

const cards = [
	{
		id: 1,
		name: 'Mia',
		image: Mia,
	},
	{
		id: 2,
		name: 'Carlos',
		image: Dog,
	},
	{
		id: 3,
		name: 'Mia',
		image: Mia,
	},
	{
		id: 4,
		name: 'Sushee',
		image: Dog2,
	},
	{
		id: 5,
		name: 'Coqui',
		image: Dog,
	},
	{
		id: 6,
		name: 'Mia',
		image: Mia,
	},
	{
		id: 7,
		name: 'Carlos',
		image: Dog,
	},
	{
		id: 8,
		name: 'Mia',
		image: Mia,
	},
	{
		id: 9,
		name: 'Sushee',
		image: Dog2,
	},
	{
		id: 10,
		name: 'Coqui',
		image: Dog,
	},
];

const getAnimales = (setAnimalCards, setLoadedData, firstFetch, setFirstFetch) => {
	if (firstFetch) {
		fetch('http://127.0.0.1:3001/Rasn/admin/animales')
			.then((response) => response.json())
			.then((animalCards) => {
				setAnimalCards(animalCards);
				setLoadedData(true);
				setFirstFetch(false);
			})
			.catch((error) => {
				//console.error(error)
			});
	}
};

export default function Cards({ changePopup }) {
	const [animalCards, setAnimalCards] = useState([]);
	const [firstFetch, setFirstFetch] = useState(true);
	const [loadedData, setLoadedData] = useState(false);

	useEffect(() => {
		getAnimales(setAnimalCards, setLoadedData, firstFetch, setFirstFetch);
		return () => {};
	}, [firstFetch]);

	return (
		<div className="row animals-box-top animals-top">
			{animalCards.map(
				({ _id, nombre, color, sexo, peso, fechaNacimiento, raza, tamanio, imagen, actitud, estado }) => (
					<Card
						key={_id + '1'}
						id={_id}
						nombre={nombre}
						color={color}
						sexo={sexo}
						peso={peso}
						fechaNacimiento={fechaNacimiento}
						raza={raza}
						tamanio={tamanio}
						imagen={imagen}
						estado={estado}
						actitud={actitud}
						changePopup={changePopup}
					/>
				)
			)}
		</div>
	);
}
