function chuckArray(arr, n) {
  const chunked = [];
 
  for (let num of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === n) {
      chunked.push([num]);
    } else {
      last.push(num);
    }
  }

  return chunked;
}

const arr = [2, 3, 4, 6, 5, 7, 9, 10];
let n = 3;
console.log(chuckArray(arr, n));
