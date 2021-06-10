import React from "react";
import Card from "./Card";

//Componenetes
import Mia from "../../assets/Mia.jpg";
import Dog from "../../assets/Dog.jpg";
import Dog2 from "../../assets/organizacion.jpg";

//Estilos
import "../../css/mascotas.css";

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
	{
		id: 6,
		name: "Mia",
		image: Mia,
	},
	{
		id: 7,
		name: "Carlos",
		image: Dog,
	},
	{
		id: 8,
		name: "Mia",
		image: Mia,
	},
	{
		id: 9,
		name: "Sushee",
		image: Dog2,
	},
	{
		id: 10,
		name: "Coqui",
		image: Dog,
	},
];

export default function Cards(props) {
	return (
		<div className="row animals-box-top animals-top">
			{cards.map(({ name, image, id }) => (
				<Card imageSource={image} name={name} key={id} popup={props.popup} />
			))}
		</div>
	);
}
