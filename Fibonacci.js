
var Fibonacci = function(numberofterms) {
    a = 0
    b = 1
    i = 0
    fibonacciarray = [1,1]
	while (i < numberofterms-2) {
  		c = a +b;
		fibonacciarray.push(c);
  		a = b;
  		b = c;
  		i += 1;
	} 
	if (numberofterms == 1) {
		console.log([1]);
	} else if (numberofterms == 2) {
		console.log([1,1]);
	} else {
	console.log(fibonacciarray);
	}
};



