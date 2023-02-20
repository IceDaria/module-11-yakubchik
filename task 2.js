//----task2----//

function isPrime(num) {
  if (!Number.isInteger(num) || num < 2 || num > 1000) {
    return "данные неверны";
  }

  let n = Math.sqrt(num);

  for (let i = 2; i <= n; i++)
  
  if (num % i === 0) {
    return "составное число";
  }

  return "простое число";
}
 
console.log(isPrime(1001));
console.log(isPrime(564));
console.log(isPrime(2));
console.log(isPrime(0));
