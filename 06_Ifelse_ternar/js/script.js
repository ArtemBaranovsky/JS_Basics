console.log('You are at '+window.location);

var answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

document.querySelector('.imageBlock').style.height ="1000px";
document.querySelector('.imageBlock').style.backgroundRepeat = "no-repeat";

document.querySelector('.imageBlock').style.backgroundImage = (answer < 18) ? "url('img/school.png')": "url('img/work.png')";
