function isPalindrome(num) {
    const numStr = num.toString();
    let reversedStr = "";
    for (let i = numStr.length - 1; i >= 0; i--) {
      reversedStr += numStr[i];
    }
    return numStr === reversedStr;
  }
  
  function findNextPalindrome(num) {
    let nextNum = num + 1;
    while (!isPalindrome(nextNum)) {
      nextNum++;
    }
    return nextNum;
  }
  
  function checkNumber(num) {
    if (isPalindrome(num)) {
      console.log(num + " is a palindrome.");
    } else {
      console.log(num + " is not a palindrome.");
      const nextPalindrome = findNextPalindrome(num);
      console.log("The next palindrome is:", nextPalindrome);
    }
  }