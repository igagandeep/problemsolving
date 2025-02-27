function isPalindrome(str){
 return str.split('').every((char, i ) =>  char === str[str.length - i -1])
}


console.log(isPalindrome("nitin"));