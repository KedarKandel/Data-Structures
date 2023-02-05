function largestNumber(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let str1 = arr[i].toString() + arr[j].toString();
      let str2 = arr[j].toString() + arr[i].toString();
      if (str2 > str1) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    result += arr[i];
  }
  return result;
}

let arr = [50, 2, 1, 9];
console.log(largestNumber(arr)); // Output: "95021"
