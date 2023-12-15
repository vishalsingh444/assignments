/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(s, t) {
  s = s.toLowerCase().split("").sort()
  t = t.toLowerCase().split("").sort()
  
  if(s.length!==t.length){
      return false;
  }
  for(let i =0;i<s.length;i++){
      if(s[i]!==t[i]){
          return false;
      }
  }
  return true;

}

module.exports = isAnagram;
