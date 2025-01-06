// function addNumber() {
//   function addTwo(num) {
//     return num + 2;
//   }
//   return addTwo;
// }
// const newFunction = addNumber();
// const result = newFunction(3);
// const result1 = newFunction(5);
// console.log(result);
// console.log(result1);

function creatFunction(arr) {
  let i = 0;
  function inner() {
    const element = arr[i];
    i++;
    return element;
  }
  return inner;
}
const returnNextElement = creatFunction([1, 2, 3]);
console.log(returnNextElement()); //1
console.log(returnNextElement()); //2
console.log(returnNextElement()); //3
console.log(returnNextElement()); //undefined


