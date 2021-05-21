import React from "react";
import Card from "./Card";

//Componenetes
import Perro from "../../assets/perraco.jpg";
import Cat from "../../assets/Cat.jpg";
import Cat2 from "../../assets/Cat2.jpg";

//Estilos
import "../../css/mascotas.css";

const cards = [
	{
		id: 1,
		name: "Pepo",
		image: Perro,
	},
	{
		id: 2,
		name: "Shull",
		image: Cat,
	},
	{
		id: 3,
		name: "Sebástian",
		image: Perro,
	},
	{
		id: 4,
		name: "Carlos",
		image: Cat2,
	},
	{
		id: 5,
		name: "Silky",
		image: Cat,
	},
	{
		id: 6,
		name: "Silky",
		image: Cat2,
	},
];

export default function Cards(popup) {
	/* console.log(popup.changePopup); */
	return (
		<div>
			<div className="row animals-box-top animals-top">
				{cards.map(({ name, image, url, id }) => (
					<Card imageSource={image} name={name} key={id} popup={() => popup} />
				))}
			</div>
		</div>
	);
}
