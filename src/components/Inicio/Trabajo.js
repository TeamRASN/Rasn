import React from "react";

//Componentes
import Card from "./Tarjetas/TrabajoCard";
import HouseIcon from "../../assets/dog-house.svg";
import VaccineIcon from "../../assets/syringe.svg";
import LicenseIcon from "../../assets/license.svg";

//Estilos

export default function Objetivos() {
	return (
		<section className="trabajo">
			<div className="container">
				<div className="row element-list">
					<Card icon={HouseIcon} />
					<Card icon={VaccineIcon} />
					<Card icon={LicenseIcon} />
				</div>
			</div>
		</section>
	);
}
