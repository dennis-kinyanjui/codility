function isPalindrome(x) {
    // Check if the number is negative
    if (x < 0) {
      return false; // Negative numbers cannot be palindromes
    }
  
    // Convert the number to a string
    const str = x.toString();
  
    // Initialize two pointers: one at the beginning and one at the end of the string
    let left = 0;
    let right = str.length - 1;
  
    // Iterate until the pointers meet or cross each other
    while (left < right) {
      // Compare characters at both pointers
      if (str[left] !== str[right]) {
        return false; // If characters don't match, it's not a palindrome
      }
      // Move the pointers towards the center
      left++;
      right--;
    }
  
    // If we've reached this point, the number is a palindrome
    return true;
  }
  