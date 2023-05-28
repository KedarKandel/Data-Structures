var solution = function(k) {
    if (k.length === 0) {
      return []; // Empty input array, return empty result
    }
  
    var commonChars = [];
  
    // Iterate over each character in the first name
    for (var i = 0; i < k[0].length; i++) {
      var char = k[0][i];
      var isCommon = true;
  
      // Check if the character is present in all names
      for (var j = 1; j < k.length; j++) {
        if (!k[j].includes(char)) {
          isCommon = false;
          break;
        } else {
          k[j] = k[j].replace(char, ''); // Remove the character to avoid counting it again
        }
      }
  
      // Add the common character to the result
      if (isCommon) {
        commonChars.push(char);
      }
    }
  
    return commonChars;
  };
  
  
  
  



console.log(solution(["cool", "lock", "cook"])); // Output: ["c", "o"]
console.log(solution(["nellie", "leslie", "stella"])); // Output: ["e", "l", l]
