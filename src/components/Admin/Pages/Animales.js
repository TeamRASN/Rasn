import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CartaAnimal from "../CartaAnimal";

//Imagenes
import Cat from "../../../assets/Cat.jpg";
import Cat2 from "../../../assets/Cat2.jpg";
import Dog from "../../../assets/perraco.jpg";
import Dog2 from "../../../assets/Dog.jpg";

//Objetos
const animalCards = [
	{
		id: 1,
		name: "Husky",
		image: Dog,
		status: "Rescatado",
	},
	{
		id: 2,
		name: "Lolo",
		image: Cat,
		status: "En adopción",
	},
	{
		id: 3,
		name: "Pepi",
		image: Dog2,
		status: "Adoptado",
	},
	{
		id: 4,
		name: "Lili",
		image: Cat2,
		status: "Rescatado",
	},
];

export default function Animales() {
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
			{animalCards.map(({ id, image, name, status }) => (
				<CartaAnimal name={name} image={image} status={status} key={id} id={id} />
			))}
		</div>
	);
}
