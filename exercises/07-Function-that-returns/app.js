let dollarToEuro = function(dollarValue) {
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue) {
	return euroValue * 124.15;
}
///***** YOUR CODE BELOW ↓ ******///

let valorEnEuros = dollarToEuro(137);
let valorEnYenes = euroToYen(valorEnEuros);

console.log(valorEnYenes);

