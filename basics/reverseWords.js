function reverseWords (str) {
    return str.trim().replace(/\s+/g,' ').split(" ").reverse().join(' ');
  }
  
  console.log(reverseWords('    This is       a     test string   ') )