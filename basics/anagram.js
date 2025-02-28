function anagram(str1, str2){
    const charMapA = buildCharMap(str1);
    const charMapB = buildCharMap(str2);
  if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
    for(let char in charMapA){
      if(charMapA[char] !== charMapB[char]){
        return false
      }
    }
    return true
  }
  
  
  const buildCharMap = (str) => {
    let charMap = {};
  
    for(let char of str.replace(/[\W]/g, '').toLowerCase()){
      charMap[char] = charMap[char] + 1 || 1; 
    }
  return charMap
  
  }
  
  // function isAnagram (str1, str2) {
  //   return str1.replace(/[\W_]/g,'').toLowerCase().split('').sort().join('') === str2.replace(/[\W_]/g,'').toLowerCase().split('').sort().join('')
  
  // }
  
  
  
  
  console.log(anagram('racecar%', '%carrace'))
  
  // console.log(anagram('racecar', 'carracr'))