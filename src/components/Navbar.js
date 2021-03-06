"use strict";
const useState = React.useState;

function Navbar() {
	const [responsiveNav, setResponsiveNav] = useState(false);
	const [responsiveOverflow, setResponsiveOverflow] = useState(false);

	const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
	const [displayHeight, setDisplayHeight] = useState(window.innerHeight);

	const changeDisplay = () => {
		setDisplayWidth(window.innerWidth);
		setDisplayHeight(window.innerHeight);
	};

	React.useEffect(() => {
		window.addEventListener("resize", changeDisplay);

		let secondnav = document.getElementById("second_nav");
		if (displayWidth < 700) {
			secondnav.classList.remove("show_secondary_list");
		} else {
			setResponsiveNav(false);
			setResponsiveOverflow(false);
			document.getElementById("responsive-mask").classList.remove("toggle_responsive_mask");
			secondnav.classList.remove("responsive_secondary_list");
		}

		return () => {
			//Remueve el evento al desmontar la función
			window.removeEventListener("resize", changeDisplay);
		};
	});

	const showResponsiveNav = () => {
		setResponsiveNav(!responsiveNav);
		setResponsiveOverflow(!responsiveOverflow);
		/* const root = document.getElementById("root");
		root.style.overflowY = responsiveOverflow ? null : "hidden";
		root.style.overflowX = "hidden"; */
		const navbar = document.getElementById("navbar");

		if (!navbar.classList.contains("navbar-toggle") && !responsiveNav) {
			navbar.classList.toggle("navbar-toggle");
		}

		if (responsiveNav) {
			navbar.classList.toggle("navbar-toggle");
		}

		if (responsiveNav === false) {
			document.getElementById("responsive-mask").classList.add("toggle_responsive_mask");
		} else {
			document.getElementById("responsive-mask").classList.remove("toggle_responsive_mask");
		}
	};

	const responsiveNavState = () => {
		return {
			transform: responsiveNav ? null : "translateX(-105%)",
		};
	};

	function activeSecondList() {
		//Selectores de elementos y submenus
		const secondnav = document.getElementById("second_nav");
		const menuArrow = document.getElementById("menu-arrow");
		const liSecondnav = document.getElementById("li-secondnav");

		menuArrow.classList.toggle("toggle_arrow");
		liSecondnav.classList.toggle("li_toggle_color");

		if (displayWidth < 700 && responsiveNav === true) {
			secondnav.classList.toggle("responsive_secondary_list");
		} else {
			secondnav.classList.toggle("show_secondary_list");
		}
	}

	//!Remover los hidden al resize de de la pantalla
	const bodyTag = document.getElementsByTagName("body")[0];
	if (document.getElementById("responsive-mask").classList.contains("toggle_responsive_mask")) {
		bodyTag.style.overflowY = "hidden";
	} else {
		bodyTag.style.overflowY = null; //remover los hidden al resize de de la pantalla
	}

	return (
		<nav id="navbar" className="">
			{/* {displayWidth} */}
			<div id="deploy-navbar-btn" onClick={showResponsiveNav}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
			<ul className="principal_list" style={responsiveNavState()}>
				<li>
					<a href="#" className="nav-brand">
						<img id="logo" src="./assets/logo.svg" alt="Refugio_San_Nicolas_logo" />
					</a>
				</li>
				<li>
					<a className="nav-element" href="algo.html">
						Inicio
					</a>
				</li>
				<li>
					<a className="nav-element" href="algo.html">
						Mascotas
					</a>
				</li>
				<li>
					<a className="nav-element" href="algo.html">
						Contactanos
					</a>
				</li>
				<li>
					<div id="li-secondnav" className="nav-element" onClick={activeSecondList}>
						<i id="menu-arrow" className="fab-icon fa fa-chevron-right" aria-hidden="true"></i>
						Involucrate
					</div>
					<ul id="second_nav">
						<li>
							<a href="algo.html" className="submenu-element">
								<i className="fab-icon fa fa-handshake-o" aria-hidden="true"></i>
								Esfuerzos
							</a>
						</li>
						<li>
							<a href="algo.html" className="submenu-element">
								<i className="fab-icon fa fa-money" aria-hidden="true"></i>
								Donativos
							</a>
						</li>
						<li>
							<a href="algo.html" className="submenu-element">
								<i className="fab-icon fa fa-users" aria-hidden="true"></i>
								Voluntarios y asociados
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

const domContainer = document.getElementById("Navbar");
ReactDOM.render(<Navbar />, domContainer);
