import React, { Component } from "react";

//Componentes
import Logo from "../../assets/logo.svg";

//Estilos

export default class Index extends Component {
	render() {
		return (
			<div className="container ms-container">
				<div className="mision">
					<div className="informacion">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea inventore nesciunt
						eos dolor ullam rem reiciendis vero, eligendi temporibus sequi laborum dolore eveniet at
						voluptatem libero commodi? Aliquam, nostrum?
					</div>
					<div className="logo-img">
						<img src={Logo} alt="" />
					</div>
				</div>
			</div>
		);
	}
}
