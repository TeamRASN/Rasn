import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CartaBlog from "../CartaBlog";

//Objetos
const blogCards = [
	{
		id: 1,
		titulo: "Insectpark, el museo donde “entras pensando que los bichos son pequeños y negros y sales fascinado”",
		imagen: "https://imagenes.elpais.com/resizer/Bm-oXzBuQJPxtzqOAMNuW24XnKk=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/NILZMYSRSBEMFCPFTC6JRG6ZYU.jpg",
		descripcion:
			"A las puertas del Parque Nacional de Guadarrama se alza un curioso y didáctico museo dedicado a los insectos, con ejemplares vivos que se pueden tocar y otros naturalizados",
	},
	{
		id: 2,
		titulo: "Los pangolines son «el mamífero más traficado del mundo». Este hombre quiere salvarlos",
		imagen: "https://cnnespanol.cnn.com/wp-content/uploads/2021/06/pangolin-2.jpg",
		descripcion:
			"(CNN) — Los pangolines —mamíferos cuadrúpedos con garras parecidas a las de los perezosos, hocico de oso hormiguero y una armadura de escamas en forma de diamante— se consideran el mamífero más traficado del mundo. Algunas especies están al borde de la extinción.",
	},
	{
		id: 3,
		titulo: "Cientos de ganaderos claman contra el lobo en Madrid",
		imagen: "https://imagenes.elpais.com/resizer/vOclpwIkLajB1m6O9kOnV7sNddE=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YJVJGULKTZFCFGWP5BQ3VQ24CI.JPG",
		descripcion:
			"La manifestación ha reunido a unas 400 personas ante el Ministerio para la Transición Ecológica para pedir a Teresa Ribera que pare la orden ministerial que impedirá cazar al cánido",
	},
	{
		id: 4,
		titulo: "'Gunda', un evangelio vegano",
		imagen: "https://estaticos-cdn.elperiodico.com/clip/f1eb3fe5-776c-4581-92d6-4edbccf3b907_alta-libre-aspect-ratio_default_0.jpg",
		descripcion:
			"Un documental de Victor Kossakovsky se acerca con una mirada inédita y muchos gruñidos a la aciaga vida de los animales de granja",
	},
	{
		id: 5,
		titulo: "Decenas de personas exigen en Barcelona la liberación de animales de Vivotecnia",
		imagen: "https://estaticos-cdn.elperiodico.com/clip/9c5217ce-3532-4185-85d9-75c9923ed6bf_alta-libre-aspect-ratio_default_0.jpg",
		descripcion:
			"Gobierno, fiscalía y policía han abierto una investigación contra este laboratorio de experimentación con animales en Madrid",
	},
	{
		id: 6,
		titulo: "La Fiscalía abre diligencias por el presunto maltrato animal en el laboratorio Vivotecnia",
		imagen: "https://estaticos-cdn.elperiodico.com/clip/979c971d-13d5-4f91-9e41-1ebcb95f94e9_alta-libre-aspect-ratio_default_0.jpg",
		descripcion:
			"La Fiscalía de Medio Ambiente ha abierto diligencias para investigar el presunto caso de maltrato animal en el laboratorio Vivotecnia, situado en Tres Cantos, tras la difusión de un vídeo que muestra cómo el personal presuntamente maltrata y humilla a los animales, han confirmado fuentes fiscales.",
	},
];

export default function Equipo() {
	return (
		<div className="row">
			<Link
				to="blogs/nuevo-post"
				className="add-new-register item new-card-container col-12 col-sm-6 col-md-4 col-lg-3"
			>
				<div className="new-register">
					<div className="new-content ">
						<div>
							<FontAwesomeIcon icon={faPlus} />
							Agregar blog
						</div>
					</div>
				</div>
			</Link>
			{blogCards.map(({ id, titulo, imagen, descripcion }) => (
				<CartaBlog titulo={titulo} imagen={imagen} descripcion={descripcion} key={id} id={id} />
			))}
		</div>
	);
}
