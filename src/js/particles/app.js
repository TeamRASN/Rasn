/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
	"particles-js",

	{
		background: {
			color: {
				value: "#ffffff",
			},
			position: "50% 50%",
			repeat: "no-repeat",
			size: "cover",
		},
		fullScreen: {
			enable: true,
			zIndex: 1,
		},
		particles: {
			color: {
				value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
			},
			move: {
				direction: "top",
				enable: true,
				outModes: {
					bottom: "out",
					left: "out",
					right: "out",
					top: "out",
				},
				speed: 5,
			},
			number: {
				value: 30,
			},
			opacity: {
				random: {
					enable: true,
					minimumValue: 0.4,
				},
				value: {
					min: 0.4,
					max: 0.8,
				},
				animation: {
					speed: 1,
					minimumValue: 0.1,
				},
			},
			size: {
				random: {
					enable: true,
					minimumValue: 300,
				},
				value: {
					min: 300,
					max: 400,
				},
				animation: {
					enable: true,
					speed: 100,
					minimumValue: 300,
				},
			},
		},
	}
);
