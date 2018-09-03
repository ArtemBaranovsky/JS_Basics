	const button = document.querySelector('button');	
	const lorems = document.querySelectorAll('div');	
	button.onclick = () => { 
		lorems.forEach((lorem) => {
			lorem.style.fontSize = '30px';
		})	
	}
