document.body.style.backgroundColor = prompt('Какой будет фон у страницы?');
document.querySelector('.page').style.color = prompt('Какой будет цвет текста на странице?');
document.querySelector('span.name').innerText =  prompt('Как зовут человека, который вас вдохновляет?');
document.querySelector('img').setAttribute('src', prompt('Введите адрес картинки'));
document.querySelector('.shortBio').innerText =  prompt('Введите текст страницы');
document.querySelector('.shortBio').className += ' animated';
