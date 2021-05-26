import React from "react";

export default function CartaIntegrante({ portada }) {
	return (
		<div className="new-card-container col-12 col-md-4 col-lg-3">
			<div className="blog-card">
				<div className="blog-img" style={{ backgroundImage: `url(${portada})` }}></div>
				<div className="blog-desc">
					<h4>Titulo</h4>
					<p className="name">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>
	);
}
