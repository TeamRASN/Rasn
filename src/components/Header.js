import React from "react";
import Particles from "react-particles-js";

import Illustration from "../assets/illustration.svg";

export default function Header() {
	return (
		<header>
			<div className="jumpboton">
				<div className="banner-container">
					<div className="information">
						<h1 className="hero-title">
							Refugio de Animales San Nicolas <span>Lomaz de Zamora</span>
						</h1>
						<p>El amor por todas las criaturas vivientes es el más noble atributo del ser humano.</p>
					</div>

					<img className="isometric-ill" src={Illustration} alt="" />
				</div>

				<div className="contenedor-img"></div>
				<div className="bottome-wave"></div>
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
			</div>
		</header>
	);
}
