window.addEventListener("scroll", function () {
	var header = document.getElementById("navbar");

	header.classList.toggle("bg-dark", window.scrollY > 0);
});

/* function btnAnimation() {
	const button = document.getElementById("nav-btn");

}
 */
