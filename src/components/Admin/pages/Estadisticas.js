/* eslint-disable no-unused-vars */
import React from "react";

// Componentes
import AreaGraph from "../graphics/AreaGraph";
import DonutGraph from "../graphics/DonutGraph";
import BarGraph from "../graphics/BarGraph";
import RadarGraph from "../graphics/RadarGraph";

//Datos
const dataLine = {
	type: "line",
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			label: "My First Dataset",
			data: [65, 59, 80, 81, 56, 55, 40],
			fill: false,
			borderColor: "rgb(75, 192, 192)",
			tension: 0.1,
		},
	],
};

const dataDoughnut = {
	type: "doughnut",
	labels: ["Red", "Blue", "Yellow"],
	datasets: [
		{
			label: "My First Dataset",
			data: [300, 50, 100],
			backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
			hoverOffset: 0,
		},
	],
};

const dataArea = {
	type: "polarArea",
	labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
	datasets: [
		{
			label: "My First Dataset",
			data: [11, 16, 7, 3, 14],
			backgroundColor: [
				"rgb(255, 99, 132)",
				"rgb(75, 192, 192)",
				"rgb(255, 205, 86)",
				"rgb(201, 203, 207)",
				"rgb(54, 162, 235)",
			],
		},
	],
	options: {},
};

const dataRadar = {
	type: "radar",
	labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	datasets: [
		{
			label: "My First Dataset",
			data: [65, 59, 90, 81, 56, 55, 40],
			fill: true,
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			borderColor: "rgb(255, 99, 132)",
			pointBackgroundColor: "rgb(255, 99, 132)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgb(255, 99, 132)",
		},
		{
			label: "My Second Dataset",
			data: [28, 48, 40, 19, 96, 27, 100],
			fill: true,
			backgroundColor: "rgba(54, 162, 235, 0.2)",
			borderColor: "rgb(54, 162, 235)",
			pointBackgroundColor: "rgb(54, 162, 235)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgb(54, 162, 235)",
		},
	],
	options: {
		elements: {
			line: {
				borderWidth: 3,
			},
		},
	},
};

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
