import React from "react";
import PropTypes from "prop-types";

//Componenetes

//Estilos
/* import "../../css/mascotas.css"; */
import "../../css/eccomerce.css";

export default function Card({ imageSource, name, text }) {
	/* const currentLocation = () => {
		console.log(window.location.href);
	}; */

	return (
		<div className="col-12 col-lg-3 col-md-4 col-sm-6 animal-card">
			<div className="card_box">
				<a className="location" href="single.html">
					<div className="img-responsive">
						<img src={imageSource} alt="" />
					</div>
					<div className="card_desc">
						<h3 className="">{name}</h3>
						<li className="card_btn">
							<a href="/hola.html">Read More</a>
						</li>
						<div className="clear"></div>
					</div>
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	imageSource: PropTypes.string,
	name: PropTypes.string.isRequired,
	text: PropTypes.string,
};
