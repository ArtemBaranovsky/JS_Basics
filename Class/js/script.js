// console.log('You are at '+window.location);
class Customer {
	constructor(name) {
		this.name = name;
	}
	buy(){console.log('Куплено');}
}

class childCustomer extends Customer {
	getPresent(){console.log('Шарик в подарок')}
} 

const a = new childCustomer('Kolyan');