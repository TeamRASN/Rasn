
function openPopup(id){

	
	var btnAbrirPopup = document.getElementById('btn-abrir-popup' + String(id));
	var overlay = document.getElementById('overlay' + String(id));
	var popup = document.getElementById('popup' + String(id));
	var btnCerrarPopup = document.getElementById('btn-cerrar-popup' + String(id));

	console.log(btnAbrirPopup);

	overlay.classList.add('active');
	popup.classList.add('active');

	btnCerrarPopup.addEventListener('click', function(e){
		e.preventDefault();
		overlay.classList.remove('active');
		popup.classList.remove('active');
	});
		
}

