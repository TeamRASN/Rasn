window.addEventListener("scroll", function () {
	const navbar = document.getElementById("navbar");
	/* const element = document.getElementsByClassName("nav-element"); */
	/* console.log(element); */

	navbar.classList.toggle("navbar-toggle", window.scrollY > 0);
	/* element.classList.toggle("text-white", window.scrollY > 0); */
});
