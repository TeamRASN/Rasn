import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// Componentes
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Integrante from '../CartaIntegrante';
import LoadingSpinner from '../LoadingSpinner';

const getIntegrantes = (setMemberCards, setLoadedData, firstFetch, setFirstFetch) => {
	if (firstFetch) {
		fetch('http://127.0.0.1:3001/Rasn/admin/equipo')
			.then((response) => response.json())
			.then((memberCards) => {
				setMemberCards(memberCards);
				setLoadedData(true);
				setFirstFetch(false);
			})
			.catch((error) => {
				//console.error(error)
			});
	}
};

export default function Equipo() {
	const [memberCards, setMemberCards] = useState([]);
	const [firstFetch, setFirstFetch] = useState(true);
	const [loadedData, setLoadedData] = useState(false);

	const deleteMember = (id) => {
		const newMemberCards = memberCards.filter((memberCard) => memberCard._id !== id);
		setMemberCards(newMemberCards);
	};

	useEffect(() => {
		getIntegrantes(setMemberCards, setLoadedData, firstFetch, setFirstFetch);
		return () => {};
	}, [firstFetch, memberCards]);

	return (
		<div className="row">
			<Link to="equipo/nuevo-miembro" className="add-new-register col-12 col-sm-6 col-md-4 col-lg-3">
				<div className="new-register">
					<div className="new-content ">
						<FontAwesomeIcon icon={faPlus} />
						Agregar miembro
					</div>
				</div>
			</Link>
			{loadedData ? (
				memberCards.map(({ _id, nombre, apellido, imagen, rol }) => (
					<Integrante
						nombre={nombre}
						apellido={apellido}
						imagen={imagen}
						rol={rol}
						key={_id}
						id={_id}
						deleteMember={(id) => deleteMember(id)}
					/>
				))
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
}
