import React from "react";
import ReactApexChart from "react-apexcharts";

export default function RadarGraph() {
	const series = [
		{
			name: "Series 1",
			data: [80, 50, 30, 40, 100, 20],
		},
		{
			name: "Series 2",
			data: [30, 10, 65, 10, 40, 100],
		},
	];

	const options = {
		chart: {
			height: 350,
			type: "radar",
		},
		title: {
			text: "Basic Radar Chart",
		},
		xaxis: {
			categories: ["January", "February", "March", "April", "May", "June"],
		},
	};

	return (
		<div id="chart">
			<ReactApexChart options={options} series={series} type="radar" height={350} />
		</div>
	);
}
