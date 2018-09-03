	let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
];

	
	const par = document.querySelectorAll('p');	

		for(currency in crypto) {

			par[currency].innerHTML = '<b><p style="font-family: Impact; font-size: 20px;">'+crypto[currency]['name']+'</p></b>';
			par[currency].innerHTML += '<p style="font-family: Comic Sans MS"; >'+crypto[currency]['price']+'</p></p>';
				
			var d=document.createElement('div');
			d.style.width= crypto[currency]['price']+'px';
			d.style.height='30px';
			d.style.marginBottom = '15px';
			d.style.background='rgb('+Math.floor(Math.random()*256)+','+ Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';;
			par[currency].appendChild(d);
		}
