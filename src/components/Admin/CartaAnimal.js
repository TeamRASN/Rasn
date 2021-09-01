import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

// Componentes
import { faTimes, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartaAnimal({
	id,
	nombre,
	color,
	sexo,
	peso,
	fechaNacimiento,
	raza,
	tamanio,
	imagen,
	estado,
	actitud,
	deleteAnimal,
}) {
	const preventSubmit = (e) => {
		e.preventDefault();
		const confirmOperation = window.confirm(`Estás seguro que deseas eliminar el registro de ${nombre}?`);
		if (confirmOperation) {
			deleteAnimal(id);
			Axios.post("http://localhost:3001/Rasn/admin/animales/delete", {
				id: id,
			}).then((res) => {
				console.log(res.data);
			});
		}
	};

	return (
		<div className="admin-animal-card col-12 col-md-6">
			<div className="img-card" style={{ backgroundImage: `url(${imagen})` }}></div>
			<div className="desc-card">
				<div className="body-card">
					<div className="info-card">
						<div className="name-prop">{nombre}</div>
						<div className="section-prop">
							<div>
								<span>Estado: </span>
								<p>{estado}</p>
							</div>
						</div>
					</div>
					<div className="crud-card">
						<form
							onSubmit={(e) => {
								preventSubmit(e);
							}}
							className="btn-crud btn-delete"
							/* id={"form-" + id} */
							title="eliminar"
						>
							{/* <input type="hidden" name="id" value={id} /> */}
							<button type="submit">
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</form>
						<Link
							to={`animales/nuevo-animal/?id=${id}?nombre=${nombre}?color=${color}?sexo=${sexo}?peso=${peso}?fechaNacimiento=${fechaNacimiento}?raza=${raza}?tamanio=${tamanio}?imagen=${imagen}?estado=${estado}?actitud=${actitud}`}
							className="btn-crud btn-modify"
							title="editar"
						>
							<FontAwesomeIcon icon={faDotCircle} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

CartaAnimal.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	status: PropTypes.string,
};
