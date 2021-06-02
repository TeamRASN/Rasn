import React from "react";

// Componentes
import Graph1 from "../../../assets/graph1.png";
import Graph2 from "../../../assets/graph2.png";
import Graph3 from "../../../assets/graph3.png";
import Graph4 from "../../../assets/graph4.jpg";

export default function Graficos() {
	return (
		<div className="graphs row">
			<h1 className="col-12">Gráficos</h1>
			<div className="graficos-ind col-12 col-md-6">
				<div className="graph-container" style={{ backgroundImage: `url(${Graph1})` }}></div>
			</div>
			<div className="graficos-ind col-12 col-md-6">
				<div className="graph-container" style={{ backgroundImage: `url(${Graph2})` }}></div>
			</div>
			<div className="graficos-ind col-12 col-md-6">
				<div className="graph-container" style={{ backgroundImage: `url(${Graph3})` }}></div>
			</div>
			<div className="graficos-ind col-12 col-md-6">
				<div className="graph-container" style={{ backgroundImage: `url(${Graph4})` }}></div>
			</div>
		</div>
	);
}
