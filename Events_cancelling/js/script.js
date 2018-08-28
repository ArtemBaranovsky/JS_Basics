// отмена дефолтного события (передача гет параметров) при сабмите

	const form = document.querySelector('form');	
	form.onsubmit = function (element) { // название элемента м.б. любое'
		element.preventDefault();	
		console.log('Submitted');
	}
