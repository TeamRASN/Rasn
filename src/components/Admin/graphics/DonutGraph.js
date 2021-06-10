import React from "react";
import ReactApexChart from "react-apexcharts";

export default function DonutGraph() {
	let series = [44, 55, 13, 33];

	const options = {
		chart: {
			width: 380,
			type: "donut",
		},
		dataLabels: {
			enabled: false,
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						show: false,
					},
				},
			},
		],
		legend: {
			position: "right",
			offsetY: 0,
			height: 230,
		},
	};

	return (
		<div className="pie-graph" id="chart">
			<ReactApexChart options={options} series={series} type="pie" width={380} />
		</div>
	);
}
