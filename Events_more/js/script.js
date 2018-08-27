window.addEventListener('load', function(){
	const button = document.querySelector('.button');
	const ball = document.querySelector('.ball');	
	const par = document.querySelector('.show p');	
	button.addEventListener('click', function(){
		ball.style.animationPlayState = 'running';
	})
	
	window.onscroll = function() {
		// console.log('works!');
		if (scrollY >=1000) {
			par.style.opacity = 1;
		} else {
			par.style.opacity = 0;
		}
	}
})

