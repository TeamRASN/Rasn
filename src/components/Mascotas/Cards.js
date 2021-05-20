import React from "react";
import Card from "./Card";

//Componenetes
import Mia from "../../assets/Mia.jpg";
import Dog from "../../assets/Dog.jpg";
import Dog2 from "../../assets/organizacion.jpg";

//Estilos
import "../../css/eccomerce.css";

const cards = [
	{
		id: 1,
		name: "Mia",
		image: Mia,
	},
	{
		id: 2,
		name: "Carlos",
		image: Dog,
	},
	{
		id: 3,
		name: "Mia",
		image: Mia,
	},
	{
		id: 4,
		name: "Sushee",
		image: Dog2,
	},
	{
		id: 5,
		name: "Coqui",
		image: Dog,
	},
];

function Cards() {
	return (
		<div className="container">
			<h1>MASCOTAS RESCATADAS</h1>
			<div className="row animals-box-top animals-top">
				{cards.map(({ name, image, url, id }) => (
					<Card imageSource={image} name={name} key={id} />
				))}
			</div>
		</div>
	);
}

export default Cards;
