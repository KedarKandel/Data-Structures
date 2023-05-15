// function sumOfDigits(num) {
//     let total = 0;
//     for (let i = 0; i < num.length; i++) {
//       let temp = parseInt(num[i]);
//       total += temp;
//     }
//     return total;
//   }
  
//   const num = "12345";
//   console.log(sumOfDigits(num)); //15
  
function sumOfDigits(num) {
    const digitSum = num.toString().split("").reduce((sum, digit) => {
      const digitValue = parseInt(digit);
      return sum + digitValue;
    }, 0);
  
    return digitSum;
  }
  
  const num = 12345;//15
  console.log(sumOfDigits(num));
  
