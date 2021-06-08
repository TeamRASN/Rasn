/* eslint-disable no-unused-vars */
import React from "react";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";

export default function CartaGrafico({ data, type }) {
	var graphType = [Line, "doughnut", "radar", "polarArea"];

	const Grafico = (type) => {
		graphType.map((e) => {
			console.log(e);
			/* if (e.includes(type)) {
			} */
			/* if (e.includes(type)) {
				console.log(type);
			} */
			return null;
		});
	};

	return (
		<div className="graph-container">
			<div>
				{Grafico(type)}
				<Radar data={data} height="1000px" />
			</div>
		</div>
	);
}
