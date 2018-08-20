var band = "Blackmore\'s night";

var str = '';
var pos = 0;
		while (pos!=band.length-1) 
			{  
				if (pos%2 == 1) 
				{ 
					str.length++;
				  str[pos] = band[pos]; 
				}
				pos++;
			}
console.log(str.length);
