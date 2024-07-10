/*
Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let hasThreeVowels = function (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let foundVowels = [];
    let uniqueCount = 0;
  
    // Iterate through each character in the string
    string.split('').forEach((char) => {
      // Check if character is a vowel and not already found
      if (
        vowels.includes(char.toLowerCase()) &&
        !foundVowels.includes(char.toLowerCase())
      ) {
        foundVowels.push(char.toLowerCase());
        uniqueCount++;
      }
    });
  
    // Check if we found at least 3 different vowels
    return uniqueCount >= 3;
  };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
