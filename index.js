function isPalindrome(word) {
  let start = 0;  // Initialize a pointer pointing to the start of the word
  let end = word.length - 1;  // Initialize a pointer pointing to the end of the word

  while (start <= end) {  // Iterate until the pointers meet or cross each other
    if (word[start] !== word[end]) {  // If the characters at the current pointers are not equal
      return false;  // The word is not a palindrome, so return false
    }
    start++;  // Move the start pointer to the right
    end--;  // Move the end pointer to the left
  }

  return true;  // If the loop completes without returning false, the word is a palindrome, so return true
}

module.exports = isPalindrome;

/*
  Pseudocode:
  1. Initialize a pointer `start` to the start of the word.
  2. Initialize a pointer `end` to the end of the word.
  3. Iterate while `start` is less than or equal to `end`.
     a. If the characters at `start` and `end` are not equal, return false.
     b. Increment `start` by 1.
     c. Decrement `end` by 1.
  4. If the loop completes without returning false, return true (the word is a palindrome).

  The algorithm uses two pointers starting from the ends of the word and checks if the characters at the pointers are equal. It continues this process inward until the pointers meet or cross each other. If at any point the characters are not equal, it returns false. If the loop completes without returning false, it means that the word is a palindrome, and it returns true.

  The algorithm has a time complexity of O(N/2) or simply O(N), where N is the length of the word. It only needs to compare characters from both ends once.
*/

// Additional test cases:
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"))
