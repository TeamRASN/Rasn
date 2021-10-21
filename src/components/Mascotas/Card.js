import React from 'react';

//Componenetes

//Estilos
import '../../css/mascotas.css';

export default function Card({
	id,
	nombre,
	color,
	sexo,
	peso,
	fechaNacimiento,
	raza,
	tamanio,
	imagen,
	actitud,
	estado,
	changePopup,
}) {
	const data = {
		id: id,
		nombre: nombre,
		color: color,
		sexo: sexo,
		peso: peso,
		fechaNacimiento: fechaNacimiento,
		raza: raza,
		tamanio: tamanio,
		imagen: imagen,
		actitud: actitud,
	};
	return (
		<>
			{estado === 'En adopción' && (
				<div className="col-11 col-lg-3 col-md-4 col-sm-6 animal-card">
					<div
						className="card_box"
						onClick={() => {
							changePopup(true, data);
						}}
					>
						<div className="img-responsive">
							<img src={imagen} alt="" />
						</div>
						<div className="card_desc">
							<h3 className="">{nombre}</h3>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
