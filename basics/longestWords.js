// function longestWord (str) {

//     const words = str.split(' ');
//    let count = 0;
//    let longestWord = '';
//     for(let word of words){
//       if(word.length > count){
//         count = word.length;
//         longestWord = word;
//       }
//     }
//   console.log(longestWord)
  
//   }
  



function longestWord (str) {

    const words = str.split(' ');
    
    const longestWord = words.reduce((l, word) => l.length > word.length ? l : word , '')
  console.log(longestWord)
  
  }
  
  longestWord('My name is Gagandeep asasaqwqw') 