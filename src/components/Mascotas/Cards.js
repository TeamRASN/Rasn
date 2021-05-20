import React from "react";
import Card from "./Card";

import Photo from "../../assets/Mia.jpg";

const cards = [
	{
		id: 1,
		title: "Mia",
		image: Photo,
	},
	{
		id: 2,
		title: "Mia",
		image: Photo,
	},
	{
		id: 3,
		title: "Mia",
		image: Photo,
	},
];

function Cards() {
	return (
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
				{cards.map(({ title, image, url, id }) => (
					<div className="col-md-4" key={id}>
						<Card imageSource={image} title={title} url={url} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Cards;
