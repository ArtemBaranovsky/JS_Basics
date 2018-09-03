// массив форм, свойство форм elements

	const form = document.forms[0];	
	const insert = document.querySelector('.total');	
	
		// console.log(form);
	form.onsubmit = function (element) { // название элемента м.б. любое'
		element.preventDefault();	
		// console.log('Submitted');
		insert.innerHTML = Math.sin(form.elements.angle.value / 180 * Math.PI );
	}
