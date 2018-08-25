      var myNumber = prompt('Введите число');
      var answer = parseInt(myNumber);
        if (typeof answer === "number") {
			answer = (answer != 0) ? -answer: 0;
        }
      document.write('Результат: ' + answer);
      console.log('Результат: ' + answer);