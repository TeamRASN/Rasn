import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../LoadingSpinner";
import CartaAnimal from "../CartaAnimal";

const getAnimales = (setAnimalCards, setLoadedData, firstFetch, setFirstFetch) => {
	if (firstFetch) {
		fetch("http://127.0.0.1:3001/Rasn/admin/animales")
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

export default function Animales() {
	const [animalCards, setAnimalCards] = useState([]);
	const [firstFetch, setFirstFetch] = useState(true);
	const [loadedData, setLoadedData] = useState(false);

	const deleteAnimal = (id) => {
		const newAnimalCards = animalCards.filter((animalCard) => animalCard._id !== id);
		setAnimalCards(newAnimalCards);
	};

	useEffect(() => {
		getAnimales(setAnimalCards, setLoadedData, firstFetch, setFirstFetch);
		return () => {};
	}, [firstFetch]);

	return (
		<div className="graphs row">
			<h1 className="col-12">Animales</h1>
			<Link to="animales/nuevo-animal" className="add-new-register-row add-new-register col-12">
				<div className="new-register">
					<div className="new-content ">
						<div>
							<FontAwesomeIcon icon={faPlus} />
							Agregar animal
						</div>
					</div>
				</div>
			</Link>
			{loadedData ? (
				animalCards.map(
					({ _id, nombre, color, sexo, peso, fechaNacimiento, raza, tamanio, imagen, estado, actitud }) => (
						<CartaAnimal
							key={_id}
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
							deleteAnimal={(id) => deleteAnimal(id)}
						/>
					)
				)
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
}
