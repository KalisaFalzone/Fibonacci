var Fibonacci = function(n) {

  if (n === 0) {
    accumulator = 0;
    return 0;}
  if (n === 1) {return 1;}
  if (n === 2) {return 1;}

  accumulator = nthFibonacci(n-1) + nthFibonacci(n-2);

  return accumulator;

};
