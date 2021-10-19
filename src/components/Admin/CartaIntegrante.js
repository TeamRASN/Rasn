import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';

// Componentes
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function CartaIntegrante({ nombre, apellido, imagen, rol, id, deleteMember }) {
	const preventSubmit = (e) => {
		e.preventDefault();
		const confirmOperation = window.confirm(`Estás seguro que deseas eliminar esta pregunta?`);
		if (confirmOperation) {
			deleteMember(id);
			Axios.post('http://localhost:3001/Rasn/admin/faq/delete', {
				id: id,
			}).then((res) => {
				console.log(res.data);
			});
		}
	};

	return (
		<div className="item integrante new-card-container col-12 col-sm-6 col-md-4 col-lg-3">
			<div className="new-member" style={{ border: 'none' }}>
				<div className="testimony-wrap new-content text-center ">
					<form
						onSubmit={(e) => {
							preventSubmit(e);
						}}
						className="integrante-delete-btn"
						title="eliminar"
					>
						<button type="submit">
							<FontAwesomeIcon icon={faTimes} />
						</button>
					</form>
					<Link
						to={`equipo/nuevo-miembro/?id=${id}?nombre=${nombre}?apellido=${apellido}?rol=${rol}?imagen=${imagen}`}
						className="member-card-container justify-content-evenly"
					>
						<div className="member-card-content">
							<div className="user-img" style={{ backgroundImage: `url(${imagen})` }}></div>
							<div className="text">
								<p className="name">
									{apellido}, {nombre}
								</p>
								<span className="position">{rol}</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

CartaIntegrante.propTypes = {
	nombre: PropTypes.string,
	apellido: PropTypes.string,
	imagen: PropTypes.string,
	rol: PropTypes.string,
};
