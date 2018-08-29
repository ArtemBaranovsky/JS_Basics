const button = document.querySelector('.request');
const pop = document.querySelector('.popup');

var state = 'none';
var stateMenu = 'none';

button.addEventListener('click', function(){
	if (state == 'none') {
		document.querySelector('div.popup').style.display = 'flex';
		state = 'flex';
	}
})

document.querySelector('.closePopup').addEventListener('click', function(){
	if (state == 'flex') {
		document.querySelector('div.popup').style.display = 'none';//.removeAttribute('style');
		state = 'none';
	}
})

document.querySelector('.openMenu').addEventListener('click', function(){
	if (stateMenu == 'none') {
		document.querySelector('.menu').style.left = 0;//.removeAttribute('style');
		stateMenu = 'active';
	}
})

document.querySelector('.closeMenu').addEventListener('click', function(){
	if (stateMenu == 'active') {
		document.querySelector('.menu').style.left = '-50vw';//.removeAttribute('style');
		stateMenu = 'none';
	}
})
