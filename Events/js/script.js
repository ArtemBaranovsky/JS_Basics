console.log('You are at '+window.location);

const button = document.querySelector('button');
const par = document.querySelector('p');
var state = 'none';
button.addEventListener('click', function(){
	if (state == 'none') {
		par.style.display = 'block';
		state = 'block';
	}
	else {
		par.style.display = 'none';
		state = 'none';
	}
})