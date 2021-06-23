import React from "react";
import PropTypes from "prop-types";

export default function faqCard({ pregunta, respuesta }) {
	return (
		<div className="faq-card hidden col-12">
			<div className="faq-content border-bottom">
				<h4 className="pregunta ">
					{pregunta} <i className="fas fa-chevron-right"></i>
				</h4>
				<p className="respuesta">{respuesta}</p>
			</div>
		</div>
	);
}

faqCard.propTypes = {
	pregunta: PropTypes.string,
	respuesta: PropTypes.string,
};
