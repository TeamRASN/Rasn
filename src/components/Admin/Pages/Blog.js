import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// Componentes
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../LoadingSpinner';
import CartaBlog from '../CartaBlog';

const getBlogs = (setBlogCards, setLoadedData, firstFetch, setFirstFetch) => {
	if (firstFetch) {
		fetch('http://127.0.0.1:3001/Rasn/blogs')
			.then((response) => response.json())
			.then((blogCards) => {
				setBlogCards(blogCards);
				setLoadedData(true);
				setFirstFetch(false);
			})
			.catch((error) => {
				//console.error(error)
			});
	}
};

export default function Equipo() {
	const [blogCards, setBlogCards] = useState([]);
	const [firstFetch, setFirstFetch] = useState(true);
	const [loadedData, setLoadedData] = useState(false);

	const deleteBlog = (id) => {
		const newBlogCards = blogCards.filter((blogCard) => blogCard._id !== id);
		setBlogCards(newBlogCards);
	};

	useEffect(() => {
		getBlogs(setBlogCards, setLoadedData, firstFetch, setFirstFetch);
		return () => {};
	}, [firstFetch]);

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
			{loadedData ? (
				blogCards.map(({ _id, titulo, imagen, descripcion, texto, autor, fecha }) => (
					<CartaBlog
						key={_id}
						titulo={titulo}
						imagen={imagen}
						descripcion={descripcion}
						texto={texto}
						autor={autor}
						fecha={fecha}
						id={_id}
						deleteBlog={(id) => deleteBlog(id)}
					/>
				))
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
}
