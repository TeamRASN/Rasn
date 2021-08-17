import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Integrante from "../CartaIntegrante";

//Objetos
const memberCards = [
	{
		id: 1,
		name: "Micaela",
		surname: "Darrel",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
		rol: "Voluntaria",
	},
	{
		id: 2,
		name: "Hernan",
		surname: "Vargas",
		image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		rol: "Voluntario",
	},
	{
		id: 3,
		name: "Paola",
		surname: "Thomson",
		image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		rol: "Organizadora",
	},
	{
		id: 4,
		name: "Miguel",
		surname: "Fernandez",
		image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
		rol: "Voluntario",
	},
	{
		id: 5,
		name: "Carolina",
		surname: "Gomez",
		image: "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
		rol: "Organizadora",
	},
	{
		id: 6,
		name: "Lucas",
		surname: "Essandy",
		image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		rol: "Voluntario",
	},
	{
		id: 7,
		name: "Uriel",
		surname: "Franco",
		image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80",
		rol: "Voluntario",
	},
	{
		id: 8,
		name: "Tomas",
		surname: "Birgo",
		image: "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		rol: "Voluntario",
	},
];

export default function Equipo() {
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
			{memberCards.map(({ id, name, surname, image, rol }) => (
				<Integrante name={name} surname={surname} image={image} rol={rol} key={id} id={id} />
			))}
		</div>
	);
}
