import React, { useEffect } from "react";

//Componentes
import Notice from "./tarjetas/NoticeCard";

//Estilos

//Objetos
const noticeCards = [
	{
		id: 1,
		banner: "https://imagenes.elpais.com/resizer/Bm-oXzBuQJPxtzqOAMNuW24XnKk=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/NILZMYSRSBEMFCPFTC6JRG6ZYU.jpg",
		title: "Insectpark, el museo donde “entras pensando que los bichos son pequeños y negros y sales fascinado”.",
		description:
			"A las puertas del Parque Nacional de Guadarrama se alza un curioso y didáctico museo dedicado a los insectos, con ejemplares vivos que se pueden tocar y otros naturalizados.",
	},
	{
		id: 2,
		banner: "https://cnnespanol.cnn.com/wp-content/uploads/2021/06/pangolin-2.jpg",
		title: "Los pangolines son «el mamífero más traficado del mundo». Este hombre quiere salvarlos.",
		description:
			"(CNN) — Los pangolines —mamíferos cuadrúpedos con garras parecidas a las de los perezosos, hocico de oso hormiguero y una armadura de escamas en forma de diamante— se consideran el mamífero más traficado del mundo. Algunas especies están al borde de la extinción.",
	},
	{
		id: 3,
		banner: "https://imagenes.elpais.com/resizer/vOclpwIkLajB1m6O9kOnV7sNddE=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YJVJGULKTZFCFGWP5BQ3VQ24CI.JPG",
		title: "Cientos de ganaderos claman contra el lobo en Madrid.",
		description:
			"La manifestación ha reunido a unas 400 personas ante el Ministerio para la Transición Ecológica para pedir a Teresa Ribera que pare la orden ministerial que impedirá cazar al cánido.",
	},
	{
		id: 4,
		banner: "https://estaticos-cdn.elperiodico.com/clip/f1eb3fe5-776c-4581-92d6-4edbccf3b907_alta-libre-aspect-ratio_default_0.jpg",
		title: "'Gunda', un evangelio vegano.",
		description:
			"Un documental de Victor Kossakovsky se acerca con una mirada inédita y muchos gruñidos a la aciaga vida de los animales de granja. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, pariatur tenetur voluptatem dolorum dignissimos repudiandae quam alias hic amet quod eum.",
	},
];

export default function Noticias() {
	useEffect(() => {
		const contenedores = document.querySelectorAll(".carta-content");

		//* Obtiene la altura de los contenedores
		contenedores.forEach((contenedor) => {
			const containerHeight = contenedor.offsetHeight - 32;

			//* Obtiene la altura que debería la descripción de la carta y limita los caracteres del título
			let descResults = [];
			contenedor.querySelectorAll(".notice-card-title").forEach((title) => {
				if (title.offsetHeight > 76) {
					title.style.height = 76 + "px";
				}
				descResults.push(containerHeight - title.offsetHeight - 16);
			});

			//* Establece y limita la altura de la descripción (solo aplica a cuando el ancho de la pantalla es de 738px)
			contenedor.querySelectorAll(".notice-card-desc").forEach((desc) => {
				const descHeight = parseInt(descResults);
				desc.style.height = descHeight + "px";

				if (descHeight === 95) {
					// 1 title line
					desc.style.webkitLineClamp = 5;
				} else if (descHeight === 76) {
					// 2 title lines
					desc.style.webkitLineClamp = 4;
				} else if (descHeight === 57) {
					// 3 title lines
					desc.style.webkitLineClamp = 3;
				} else if (descHeight === 38) {
					// 4 title lines
					desc.style.webkitLineClamp = 2;
				}
			});
		});
	});

	return (
		<section className="notices-container">
			<div className="container">
				<div className="col-12 heading-section">
					<h2>Últimas noticias</h2>
				</div>
				<div className="row element-list">
					{noticeCards.map(({ id, banner, title, description }) => (
						<Notice key={id} banner={banner} title={title} description={description} />
					))}
				</div>
			</div>
		</section>
	);
}
