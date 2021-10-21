import React from 'react';
import { useState } from 'react';

//Componenetes
import Rescatados from '../components/Mascotas/Rescatados';

//Estilos
import '../css/mascotas.css';

export default function AnimalesRescatados() {
	const [showPopup, setShowPopup] = useState(false);
	const [modalData, setModalData] = useState({});

	const changePopup = (data) => {
		const overlay = document.getElementById('overlay');
		const popup = document.getElementById('popup');
		const bodyTag = document.getElementsByTagName('body')[0];
		setShowPopup(!showPopup);
		setModalData(data);

		if (popup) {
			if (showPopup) {
				overlay.classList.add('active');
				popup.classList.add('active');
			} else {
				overlay.classList.remove('active');
				popup.classList.remove('active');
			}
		}

		//!Remover los hidden al resize de de la pantalla
		if (overlay.classList.contains('active')) {
			bodyTag.style.overflowY = 'hidden';
		} else {
			bodyTag.style.overflowY = null; //remover los hidden al resize de la pantalla
		}
	};

	const formatDate = (arg) => {
		let date = new Date(arg);

		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let formatedDate;
		if (month < 10) {
			formatedDate = `${year}-0${month}-${day}`;
		} else {
			formatedDate = `${year}-${month}-${day}`;
		}

		console.log(formatedDate);
		return formatedDate;
	};

	return (
		<main className="mascotas-page">
			<div className="container">
				<Rescatados changePopup={(data) => changePopup(data)} />
			</div>

			<div className="overlay" id="overlay" onClick={() => changePopup()}>
				<div className="popup" id="popup">
					{modalData !== undefined && (
						<>
							<div className="img" style={{ backgroundImage: `url(${modalData.imagen})` }}></div>
							<div className="info-section">
								<div className="container-text">
									<h1>{modalData.nombre}</h1>
									<div className="descripcion row">
										<div className="renglon col-12 col-md-6">
											<h4>Sexo:</h4>
											<p>{modalData.sexo}</p>
										</div>
										<div className="renglon col-12 col-md-6">
											<h4>Peso:</h4>
											<p>{modalData.peso}kg</p>
										</div>
										<div className="renglon col-12 col-md-6">
											<h4>Nacimiento:</h4>
											<p>{formatDate(modalData.fechaNacimiento)}</p>
										</div>
										<div className="renglon col-12 col-md-6">
											<h4>Raza:</h4>
											<p>{modalData.raza}</p>
											<br />
										</div>
										<div className="renglon col-12 col-md-6">
											<h4>Tamaño:</h4>
											<p>{modalData.tamanio}</p>
										</div>
										<div className="renglon col-12 col-md-6">
											<h4>Pelaje:</h4>
											<p>{modalData.color}</p>
										</div>
										<div className="renglon col-12 aptitud">
											<h4>Actitud: </h4>
											<p>{modalData.actitud}.</p>
										</div>
									</div>
									<a className="btn-adoptar" href="/mascotas/adoptar">
										Adoptar
									</a>
									<div id="btn-cerrar-popup" className="btn-cerrar-popup" onClick={changePopup}>
										<i className="fas fa-times"></i>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</main>
	);
}
