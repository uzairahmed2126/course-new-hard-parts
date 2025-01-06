// function createFlow(array) {
//   let i = 0;
//   const inner = {
//     next: function () {
//       const element = array[i];
//       i++;
//       return element;
//     },
//   };
//   return inner;
// }
// const returnNextElement = createFlow([4, 5, 6]);
// function nextElement() {
//   return returnNextElement.next();
// }
// const element1 = nextElement(); //4
// const element2 = nextElement(); //5
// const element3 = nextElement(); //6
// const element4 = nextElement(); //undefined

// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const nextElementOfGen = generator();
// console.log(nextElementOfGen.next()); //value:1 done:true
// console.log(nextElementOfGen.next()); //value:2 done:true
// console.log(nextElementOfGen.next()); //value:3 done:true
// console.log(nextElementOfGen.next()); //value:undefined done:false

// generator function with dynamic data
function* createFlow() {
  const arr = [1, 2, 3, 4, 5]; // Array of elements
  for (let index = 0; index < arr.length; index++) {
    yield arr[index]; // Yield each element in sequence
  }
}

const returnNextElement = createFlow(); // Create generator object
const element1 = returnNextElement.next(); // { value: 1, done: false }
const element2 = returnNextElement.next(); // { value: 2, done: false }
const element3 = returnNextElement.next(); // { value: 3, done: false }
const element4 = returnNextElement.next(); // { value: 4, done: false }
const element5 = returnNextElement.next(); // { value: 5, done: false }
const element6 = returnNextElement.next(); // { value: undefined, done: true }

console.log(element1, element2, element3, element4, element5, element6);
