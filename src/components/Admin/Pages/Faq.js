import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CartaFaq from "../CartaFaq";
import LoadingSpinner from "../LoadingSpinner";

const getFaqs = (setFaqCards, setLoadedData, firstFetch, setFirstFetch) => {
	if (firstFetch) {
		fetch("http://127.0.0.1:3001/Rasn/admin/faq")
			.then((response) => response.json())
			.then((faqCards) => {
				setFaqCards(faqCards);
				setLoadedData(true);
				setFirstFetch(false);
			})
			.catch((error) => {
				//console.error(error)
			});
	}
};

export default function Faq() {
	const [faqCards, setFaqCards] = useState([]);
	const [firstFetch, setFirstFetch] = useState(true);
	const [loadedData, setLoadedData] = useState(false);

	
	const deleteFaq = (id) => {
		const newFaqCards = faqCards.filter((faqCard) => faqCard._id !== id);
		setFaqCards(newFaqCards);
	};
	
	useEffect(() => {
		getFaqs(setFaqCards, setLoadedData, firstFetch, setFirstFetch);
		return () => {};
	}, [firstFetch, faqCards]);

	return (
		<div className="row">
			<Link to="faq/nueva-pregunta" className="add-new-register-row add-new-register col-12">
				<div className="new-register">
					<div className="new-content">
						<div>
							<FontAwesomeIcon icon={faPlus} />
							Agregar pregunta
						</div>
					</div>
				</div>
			</Link>
			{loadedData ? (
				faqCards.map(({ _id, pregunta, respuesta }) => (
					<CartaFaq key={_id} id={_id} pregunta={pregunta} respuesta={respuesta} deleteFaq={(id) => deleteFaq(id)}/>
				))
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
}
