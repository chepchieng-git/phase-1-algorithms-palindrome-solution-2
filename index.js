function isPalindrome(word) {
  // Convert the string to an array of characters
  const characters = word.split('');

  // Reverse the array using array methods
  const reversedCharacters = characters.reverse();

  // Convert the reversed array back into a string
  const reversedWord = reversedCharacters.join('');

  // Return true if the reversed word matches the original word, false otherwise
  return word === reversedWord;
}



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
