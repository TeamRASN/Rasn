/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// Componentes
import Notice from '../components/Inicio/Tarjetas/NoticeCard';

// Estilos
import '../css/esfuerzos_donativos.css';

const getBlogs = (setBlogsCards, setLoadedData, firstFetch, setFirstFetch) => {
	if (firstFetch) {
		fetch('http://127.0.0.1:3001/Rasn/blogs')
			.then((response) => response.json())
			.then((blogCards) => {
				setBlogsCards(blogCards);
				setLoadedData(true);
				setFirstFetch(false);
			})
			.catch((error) => {
				//console.error(error)
			});
	}
};

export default function Esfuerzos() {
	const [blogCards, setBlogCards] = useState([]);
	const [firstFetch, setFirstFetch] = useState(true);
	const [loadedData, setLoadedData] = useState(false);

	useEffect(() => {
		getBlogs(setBlogCards, setLoadedData, firstFetch, setFirstFetch);
		const contenedores = document.querySelectorAll('.carta-content');

		//* Obtiene la altura de los contenedores
		contenedores.forEach((contenedor) => {
			const containerHeight = contenedor.offsetHeight - 32;

			//* Obtiene la altura que debería la descripción de la carta y limita los caracteres del título
			let descResults = [];
			contenedor.querySelectorAll('.notice-card-title').forEach((title) => {
				if (title.offsetHeight > 76) {
					title.style.height = 76 + 'px';
				}
				descResults.push(containerHeight - title.offsetHeight - 16);
			});

			//* Establece y limita la altura de la descripción (solo aplica a cuando el ancho de la pantalla es de / mayor de 738px)
			contenedor.querySelectorAll('.notice-card-desc').forEach((desc) => {
				const descHeight = parseInt(descResults);
				desc.style.height = descHeight + 'px';

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
	}, [firstFetch]);

	return (
		<main className="container notices-container">
			<div className="row">
				{blogCards.map(({ _id, imagen, titulo, descripcion, texto, autor, fecha }) => (
					<Notice
						key={_id}
						imagen={imagen}
						titulo={titulo}
						descripcion={descripcion}
						texto={texto}
						autor={autor}
						fecha={fecha}
					/>
				))}
			</div>
		</main>
	);
}
