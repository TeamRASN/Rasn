import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';

// Componentes
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function CartaBlog({ id, titulo, imagen, descripcion, autor, texto, fecha, deleteBlog }) {
	const preventSubmit = (e) => {
		e.preventDefault();
		const confirmOperation = window.confirm(`Estás seguro que deseas eliminar este blog?`);
		if (confirmOperation) {
			deleteBlog(id);
			Axios.post('http://localhost:3001/Rasn/admin/blogs/delete-blog', {
				id: id,
			}).then((res) => {
				console.log(res.data);
			});
		}
	};

	return (
		<div className="new-card-container col-12 col-sm-6 col-md-4 col-lg-3">
			<div className="blog-card">
				<div className="img-container">
					<div className="layer"></div>
					<div className="blog-img" style={{ backgroundImage: `url(${imagen})` }}></div>
					<form
						onSubmit={(e) => {
							preventSubmit(e);
						}}
						className="btn-crud btn-delete"
						title="eliminar"
					>
						<button type="submit" className="delete-btn">
							<FontAwesomeIcon icon={faTimes} />
						</button>
					</form>
				</div>
				<div className="blog-content">
					<div className="blog-desc">
						<h5>{titulo}</h5>
						<p className="name">{descripcion}</p>
					</div>
					<div className="modify-container">
						<Link
							to={`blogs/nuevo-post/?id=${id}?titulo=${titulo}?descripcion=${descripcion}?imagen=${imagen}?texto=${texto}?autor=${autor}?fecha=${fecha}`}
							className="btn-modify"
							title="editar"
						>
							Modificar
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

CartaBlog.propTypes = {
	titulo: PropTypes.string,
	imagen: PropTypes.string,
	descripcion: PropTypes.string,
};
