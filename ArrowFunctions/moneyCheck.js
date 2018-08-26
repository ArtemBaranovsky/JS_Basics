// Функция должна возвращать “Вам хватает денег на покупки” (если хватает) или “Вам не хватает денег”, если не хватает
var haveEnough = (money, apple, bread, applePrice, breadPrice) => {	// аргументы (кол-во денег, кол-во яблок, кол-во хлеба, цена яблока, цена хлеба)
	var check = money >= apple*applePrice+bread*breadPrice;
	return (check) ? "Вам хватает денег на покупки": "Вам не хватает денег";
}
console.log(haveEnough(50,3,2,3,8));