import React from "react";
import PropTypes from "prop-types";

//Componenetes

//Estilos
import "../../css/mascotas.css";

export default function Card({ imageSource, name, text, popup }) {
	return (
		<div className="col-11 col-lg-3 col-md-4 col-sm-6 animal-card">
			<div className="card_box">
				<button className="location" onClick={() => popup}>
					<div className="img-responsive">
						<img src={imageSource} alt="" />
					</div>
					<div className="card_desc">
						<h3 className="">{name}</h3>
					</div>
				</button>
			</div>
		</div>
	);
}

Card.propTypes = {
	imageSource: PropTypes.string,
	name: PropTypes.string.isRequired,
	text: PropTypes.string,
};
