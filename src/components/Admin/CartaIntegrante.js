import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CartaIntegrante({ name, surname, image, rol, id }) {
	return (
		<div className="item integrante new-card-container col-12 col-sm-6 col-md-4 col-lg-3">
			<Link className="new-member" to={`equipo/nuevo-miembro/${id}`} style={{ border: "none" }}>
				<div className="testimony-wrap new-content text-center ">
					<div className="integrante-delete-btn">
						<i className="fas fa-times"></i>
					</div>
					<div className="member-card-container justify-content-evenly">
						<div className="member-card-content">
							<div className="user-img" style={{ backgroundImage: `url(${image})` }}></div>
							<div className="text">
								<p className="name">
									{surname}, {name}
								</p>
								<span className="position">{rol}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

CartaIntegrante.propTypes = {
	name: PropTypes.string,
	surname: PropTypes.string,
	image: PropTypes.string,
	rol: PropTypes.string,
};
