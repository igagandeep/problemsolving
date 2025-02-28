function longestSubstringLength(str) {

  let subStr = '';
  let ls = '';

  for(let i = 0; i < str.length; i++){
    if(subStr.includes(str[i])){
      if(subStr.length > ls.length){
        ls = subStr
      }
      subStr = str[i];
    }
    else
    subStr += str[i]
  }
return ls;
}

console.log(longestSubstringLength('abbcde'));
//  - Returns 3 ('abc')

longestSubstringLength('aaaa') 
// - Returns 1 ('a')

longestSubstringLength('abbcdb')