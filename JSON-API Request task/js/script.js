// массив форм, свойство форм elements
window.onload = function(){

	const form = document.forms[0];	
	const APIKey='7bba12f95396429bbe88096122981d2f';
	const insert = document.querySelector('.total');	
	var cities = document.querySelectorAll('input');
	var city ='';
		// console.log(form);
	form.onsubmit = function (e) { 
		e.preventDefault();	
		cities.forEach ((element, index) => {
			if (cities[index].checked === true ) {
				city = cities[index].value;
			}
		});

		// const city = 'Lisichansk';
		const url ='http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+APIKey;

		var xhr = new XMLHttpRequest();	//  https://xhr.spec.whatwg.org/	
		xhr.open('GET', url, false); // 3-й параметр флаг синхронности запроса
		xhr.send();
		if (xhr.status != 200) {
			console.log(xhr.status + ' ' + xhr.statusText);
		} else {
			var DATA = JSON.parse(xhr.responseText);
		}
		
		insert.innerHTML = DATA.main.temp + '°C';
	}
}