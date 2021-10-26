/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from './Card';

//Estilos
import '../../css/mascotas.css';

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
		<div className="row animals-section">
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
