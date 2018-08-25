const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
console.log("Throw result(player/computer): ", player,computer);
if (player == computer) console.log('In a draw');
	else if ((player - computer) == 1 || (computer - player) == 2) console.log('Computer wins');
		else console.log('Player wins');