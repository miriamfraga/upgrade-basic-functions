const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
let sum= 0;

  for(i=0; i<param.length; i++) {
    sum += param[i];
  }

console.log(sum)
} 
sumAll(numbers);
