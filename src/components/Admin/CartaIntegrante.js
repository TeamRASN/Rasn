import React from "react";

export default function CartaIntegrante({ persona }) {
	return (
		<div className="item integrante new-card-container col-12 col-sm-6 col-md-4 col-lg-3">
			<div className="new-member">
				<div className="testimony-wrap new-content text-center ">
					<div className="integrante-delete-btn">
						<i className="fas fa-times"></i>
					</div>
					<div className="member-card-container justify-content-evenly">
						<div className="member-card-content">
							<div className="user-img" style={{ backgroundImage: `url(${persona})` }}></div>
							<div className="text">
								<p className="name">Nombre</p>
								<span className="position">Voluntario</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
