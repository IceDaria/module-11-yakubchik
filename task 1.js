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
