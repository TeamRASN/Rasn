import React from "react";
import PropTypes from "prop-types";

//Componentes

export default function Integrante({ name, surname, image, rol }) {
	return (
		<div className="item integrante">
			<div className="testimony-wrap text-center">
				<div className="user-img" style={{ backgroundImage: `url(${image})` }}></div>
				<div className="text">
					<p className="name">
						{surname}, {name}
					</p>
					<span className="position">{rol}</span>
				</div>
			</div>
		</div>
	);
}

Integrante.propTypes = {
	name: PropTypes.string,
	surname: PropTypes.string,
	image: PropTypes.string,
	rol: PropTypes.string,
};
