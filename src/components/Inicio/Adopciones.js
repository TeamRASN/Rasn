import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Background from "../../assets/parallax-background.jpg";

export default function Adopciones() {
	return (
		<ParallaxProvider>
			<ParallaxBanner layers={[{ image: Background, amount: 0.6 }]} opacity="0.1">
				<div className="adopciones-banner-content"></div>
			</ParallaxBanner>
		</ParallaxProvider>
	);
}
