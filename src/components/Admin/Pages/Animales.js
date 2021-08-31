import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CartaAnimal from "../CartaAnimal";

const getAnimales = (setAnimalCards) => {
	fetch("http://127.0.0.1:3001/Rasn/admin/animales")
		.then((response) => response.json())
		.then((animalCards) => {
			console.log(animalCards);
			setAnimalCards(animalCards);
		})
		.catch((error) => {
			//console.error(error)
		});
};

export default function Animales() {
	const [animalCards, setAnimalCards] = useState([]);

	useEffect(() => {
		getAnimales(setAnimalCards);

		return () => {};
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
			{animalCards.map(({ _id, nombre, color, sexo, peso, fechaNacimiento, raza, tamanio, imagen, estado }) => (
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
                />
            ))}
		</div>
	);
}
