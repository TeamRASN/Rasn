import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";

import Illustration from "../assets/illustration.svg";
/* import Wave from "../assets/wave.svg"; */

export default function Header({ headerHeight }) {
	const [waveWidth, setWaveWidth] = useState("100%");

	useEffect(() => {
		if (headerHeight === 90) {
			setWaveWidth("200%");
			document.getElementById("tsparticles").style.height = "90vh";
		} else if (headerHeight === 35) {
			document.getElementById("tsparticles").style.height = "35vh";
			setWaveWidth("300%");
		} else if (headerHeight === 0) {
			document.getElementsByClassName("cls-1")[0].style.fill = "#432e2e";
			document.getElementById("tsparticles").style.height = "0vh";
		}
	}, [headerHeight]);

	return (
		<header>
			<div className="jumpboton" style={{ height: `${headerHeight}vh` }}>
				{headerHeight > 35 ? (
					<div className="banner-container">
						<div className="information">
							<h1 className="hero-title">
								Refugio de Animales San Nicolas <span>Lomas de Zamora</span>
							</h1>
							<p className="title-paragraph">
								El amor por todas las criaturas vivientes es el más noble atributo del ser humano.
							</p>
						</div>

						<img className="isometric-ill" src={Illustration} alt="" />
					</div>
				) : null}
				<div className="contenedor-img">
					<Particles
						params={{
							particles: {
								number: {
									value: 20,
									density: {
										enable: true,
										value_area: 800,
									},
								},
								size: {
									value: 20,
									random: true,
									anim: {
										enable: false,
										speed: 40,
										size_min: 0.1,
										sync: false,
									},
								},
								move: {
									speed: 3,
									direction: "top",
									out_mode: "out",
								},
								line_linked: {
									enable: false,
								},
							},
							interactivity: {
								events: {
									onclick: {
										enable: true,
										mode: "remove",
									},
								},
								modes: {
									remove: {
										particles_nb: 10,
									},
								},
							},
						}}
					/>
					<svg
						id="Capa_1"
						data-name="Capa 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 128"
						className="bottome-wave"
						style={{ width: `${waveWidth}` }}
					>
						<path
							className="cls-1"
							d="M0,224l120,16c120,16,360,48,600,42.7,240-5.7,480-47.7,600-69.4L1440,192V320H0Z"
							transform="translate(0 -192)"
						/>
					</svg>
					{/* <img src={Wave} alt="wave" className="bottome-wave" style={{ width: `${waveWidth}` }}></img> */}
				</div>
			</div>
		</header>
	);
}
