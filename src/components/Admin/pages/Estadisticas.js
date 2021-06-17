/* eslint-disable no-unused-vars */
import React from "react";

// Componentes
import AreaGraph from "../graphics/AreaGraph";
import DonutGraph from "../graphics/DonutGraph";
import BarGraph from "../graphics/BarGraph";
import RadarGraph from "../graphics/RadarGraph";

export default function Graficos() {
	return (
		<div className="graphs row">
			<h1 className="col-12">Estadísticas</h1>
			<div className="graficos-ind col-12 col-md-6">
				<div className="graph-container">
					<div className="graph-content">
						<BarGraph />
					</div>
				</div>
			</div>
			<div className="graficos-ind col-12 col-md-6">
				<div className="graph-container">
					<div className="graph-content">
						<DonutGraph />
					</div>
				</div>
			</div>
			<div className="graficos-ind col-12 col-md-6">
				<div className="graph-container">
					<div className="graph-content">
						<AreaGraph />
					</div>
				</div>
			</div>
			<div className="graficos-ind col-12 col-md-6">
				<div className="graph-container">
					<div className="graph-content">
						<RadarGraph />
					</div>
				</div>
			</div>
		</div>
	);
}
