const applyCallbackToEachElement = (arr, callback) => {
    const result = [];
    arr.forEach((element) => {
      result.push(callback(element));
    });
    return result;
};
  
const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;
const result = applyCallbackToEachElement(arr, squareCallback);
  
console.log(result);