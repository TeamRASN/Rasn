import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CartaAnimal from "../CartaAnimal";

export default function Animales() {
	const [animalCards, setAnimalCards] = useState(null);
	const getAnimales = () => {
		fetch("http://127.0.0.1:3001/Rasn/admin/animales")
		.then(response => response.json())
		.then((animalCards) => {
			// jsonData is parsed json object received from url
			setAnimalCards(animalCards)
		})
		.catch((error) => {
			// handle your errors here
			//console.error(error)
		})
	} 
	
	useEffect(() => {
		getAnimales();

		return () => {
		};
	}, []);
	
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
			{console.log(animalCards)}
			{/* {animalCards.map(({ _id, imagen, nombre, estado }) => (
				<CartaAnimal nombre={nombre} imagen={imagen} estado={estado} key={_id} id={_id} />
			))} */}
		</div>
	);
}
