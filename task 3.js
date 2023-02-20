//----task3----//

function sum(x) {

  return function examp(y) {
    return x + y;
  }
}

const sumResult = sum(3)(4);

console.log (sumResult);