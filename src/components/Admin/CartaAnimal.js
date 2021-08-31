import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
}) {
	const sendData = () => {
		const form = document.getElementById("form-" + id);
		form.submit();
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
							method="post"
							action="http://localhost:3001/Rasn/admin/animales/delete"
							target="_blank"
							className="btn-crud btn-delete"
							id={"form-" + id}
							title="eliminar"
						>
							<input type="hidden" name="id" value={id} />
							<input type="hidden" name="nombre" value={nombre} />
							<input type="hidden" name="color" value={color} />
							<input type="hidden" name="sexo" value={sexo} />
							<input type="hidden" name="peso" value={peso} />
							<input type="hidden" name="fechaNacimiento" value={fechaNacimiento} />
							<input type="hidden" name="raza" value={raza} />
							<input type="hidden" name="tamanio" value={tamanio} />
							<input type="hidden" name="imagen" value={imagen} />
							<input type="hidden" name="aptitud" value={actitud} />
							<input type="hidden" name="estado" value={estado} />
							<FontAwesomeIcon icon={faTimes} onClick={sendData} />
							<p className="deleteP">borrar</p>
						</form>
						<Link
							to={`animales/nuevo-animal/?id:${id}?nombre:${nombre}?color:${color}?sexo:${sexo}?peso:${peso}?fechaNacimiento:${fechaNacimiento}?raza:${raza}?tamanio:${tamanio}?imagen:${imagen}?estado:${estado}?aptitud:${actitud}`}
							className="btn-crud btn-modify"
							title="editar"
						>
							<FontAwesomeIcon icon={faDotCircle} />
							<p className="modifyP">modificar</p>
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
