/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n = str.length;
  if(n===1) return true;
  str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let first = 0;
  let last = str.length-1;
  while(first<last){
    if(str[first]===str[last]){
      first++;
      last--;
    }else{
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
