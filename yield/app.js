// function doWhenDataReceived(response) {
//   response.json().then((data) => returnNextElement.next(data));
// }

// function* createFlow() {
//   const data = yield fetch("https://jsonplaceholder.typicode.com/posts/");
//   console.log("Data:", data);
// }

// const returnNextElement = createFlow();
// const futureData = returnNextElement.next().value;
// console.log(futureData)
// let data = futureData.then(doWhenDataReceived);
// console.log(data);

// function doWhenDataReceived(res) {
//   res.json().then((data) => nextElement.next(data));
// }

// function* createFlow() {
//   const data = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
//   console.log(data);
// }

// const nextElement = createFlow();
// const futureData = nextElement.next().value;
// const data = futureData.then(doWhenDataReceived);
// console.log(data);
function doWhenDataReceived(res) {
  res.json().then((data) => nextElement.next(data));
}
function* fetchData() {
  const data = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);
  // return fetchFunction;
}

const nextElement = fetchData();
const futureData = nextElement.next().value;
const data = futureData.then(doWhenDataReceived);
console.log(data);

