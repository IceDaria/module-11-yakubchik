let arr = [0, "bear", 6, null, "cat", 4, 5, 21, "racoon", 1, 8, 2.5];

function getCount() {

let zeroCount = 0;
let otherCount = 0;
let numberCount = 0;
let evenCount = 0;
let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number" || !isNaN(arr[i])) {
          numberCount++;
          if (arr[i] === 0) {
            zeroCount++;
          } else if (arr[i] % 2 === 0) {
            evenCount++;
          } else {
            oddCount++;
          } 
      } else  {
        otherCount++;
      }
  }
  console.log('Чисел в массиве - ' + numberCount,  zeroCount + ' нолей', evenCount + ' чётных чисел', oddCount + ' нечётных чисел', otherCount + ' других значений' )
}

getCount(arr)

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


//----task3----//

function sum(x) {

  return function examp(y) {
    return x + y;
  }
}

const sumResult = sum(3)(4);

console.log (sumResult);


//----task-4----//

function counter(a, b) {
    let idx = a;
    const i = setInterval(() => {
        console.log(idx);
        if (idx === b) clearInterval(i);
        ++idx
    }, 1000)
}
counter(5, 15);


//----task-5----//

const func = (x, n) => {
  
  let result = x ** n
  
  console.log(result)
  
}

func(5, 2)