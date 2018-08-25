console.log('You are at '+window.location);

var answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

document.querySelector('.imageBlock').style.height ="1000px";
document.querySelector('.imageBlock').style.backgroundRepeat = "no-repeat";

if (answer <= 18) {
	document.querySelector('.imageBlock').style.backgroundImage = "url('img/school.png')";
} else if (answer <= 24) {
		document.querySelector('.imageBlock').style.backgroundImage = "url('img/party.png')";
	} else if (answer <= 60) {
			document.querySelector('.imageBlock').style.backgroundImage = "url('img/work.png')";
		} else  document.querySelector('.imageBlock').style.backgroundImage = "url('img/home.png')";