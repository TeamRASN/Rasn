import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "../CartaAnimal";
import Cat from "../../../assets/Cat.jpg";
import Cat2 from "../../../assets/Cat2.jpg";
import Cat3 from "../../../assets/Mia.jpg";
import Dog from "../../../assets/perraco.jpg";
import Dog2 from "../../../assets/Dog.jpg";

export default function Animales() {
	return (
		<div className="graphs row">
			<h1 className="col-12">Animales</h1>
			<Link to="/animales/nuevo-animal" className="add-new-register-row add-new-register col-12">
				<div className="new-register">
					<div className="new-content ">
						<div>
							<FontAwesomeIcon icon={faPlus} />
							Agregar animal
						</div>
					</div>
				</div>
			</Link>
			<Card imagen={Cat} />
			<Card imagen={Cat2} />
			<Card imagen={Dog} />
			<Card imagen={Cat3} />
			<Card imagen={Dog2} />
			<Card imagen={Dog} />
			<Card imagen={Cat} />
			<Card imagen={Cat2} />
			<Card imagen={Dog2} />
			<Card imagen={Cat3} />
		</div>
	);
}
