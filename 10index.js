// Write a function in JavaScript that takes a string as input and returns the most common character in the string. If there is a tie, return any of the most common characters. You can assume that the input string only contains alphanumeric characters (i.e. letters and digits) and is not empty.

function commonChr(string) {
  if (!string) return "no input found";

  let obj = {};
  let mostCommonchr = "";
  let maxCount = 0;

  for (let i = 0; i < string.length; i++) {
    let currChr = string[i];
    obj[currChr] = (obj[currChr] || 0) + 1;

    if (obj[currChr] > maxCount) {
      maxCount = obj[currChr];
      mostCommonchr = currChr;
    }
  }

  return mostCommonchr;
}

console.log(commonChr("aldnjdsaa"));
