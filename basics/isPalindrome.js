


// iterative solution

// function isPalindrome(str){
//     for(let i = 0; i < str.length; i++){
//       if(str[i] !== str[str.length - i-1]){
//         return false
//       }
//     }
//     return true;
//   }
  


// // function isPalindrome(str){
//  const reverse = str.split('').reverse().join('');
//  return reverse === str;
// }

  
// function isPalindrome (str) {
//     return (
//       str.replace(/[\W_]/g, '').toLowerCase() ===
//       str
//         .replace(/[\W_]/g, '')
//         .toLowerCase()
//         .split('')
//         .reverse()
//         .join('')
//     )
//   }


// function isPalindrome(str){
//     return str.split('').every((char, i ) =>  char === str[str.length - i -1])
//    }
   
  console.log(isPalindrome("nitine"));