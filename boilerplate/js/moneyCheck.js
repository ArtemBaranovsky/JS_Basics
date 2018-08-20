var money = +prompt("Сколько у вас с собой есть денег?");
var apple = +prompt("Сколько вы купили яблок?");
var bread = +prompt("Сколько вы купили батонов хлеба?");
var totalApplePrice = apple*prompt("Сколько стоит одно яблоко?");
var totalBreadPrice = bread*prompt("Сколько стоит один батон хлеба?");
var check = money >= totalApplePrice+totalBreadPrice;
document.body.write = check;


