	class Person {
		constructor(name) {
			this.name = name;
			this.happiness = 0;
		}
		hasCat() {return this.happiness++}
		hasRest() {return this.happiness++}
		hasMoney() {return this.happiness++}
		isSunny() {
				const APIKey='7bba12f95396429bbe88096122981d2f';
				var city ='Moscow';
				const url ='http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+APIKey;
				var xhr = new XMLHttpRequest();
				xhr.open('GET', url, false); // 3-й параметр флаг синхронности запроса
				xhr.send();
				if (xhr.status != 200) {
					console.log(xhr.status + ' ' + xhr.statusText);
				} else {
					var DATA = JSON.parse(xhr.responseText);
				}
				if (DATA.main.temp > 15) this.happiness++;
				return this.happiness;
			}
	}

	const myform = document.forms[0];	
	var questions = document.querySelectorAll('input[type=radio]');

window.onload = ()=>{
	myform.onsubmit = function(e) { 
		e.preventDefault();	
		var personName = document.querySelector('input[type=text]').value;
		testPerson = new Person(personName);
		var count=0;
		questions.forEach ((element, index) => {
			if (index % 2 === 0  && questions[index].checked) {
				switch (index) {
					case 0: testPerson.hasCat();
						break;
					case 2: testPerson.hasRest();
						break;
					case 4: testPerson.hasMoney();
						break;
					default: break;
				}
			}
		});
		testPerson.isSunny();
		document.querySelector('.personName').innerHTML = personName+':';
		myIcon = document.querySelector('.icon');
		switch (+testPerson.happiness) {
			case 2 : ;
			case 3 : myIcon.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/neutral-face_1f610.png">';
				break;
			case 4 : myIcon.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/grinning-face-with-smiling-eyes_1f601.png">';
				break;
			default: myIcon.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/white-frowning-face_2639.png">';
		}
		
	}	 
}