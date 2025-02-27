
// recrusive approcah
function factorial(num) {
    if(num === 0){
     return 1;
    }
   
    if(num === 1){
     return num;
    }
   
    return num * factorial(num - 1);
   }
   
   
   // Iterative approach
   
   // function factorial(num) {
   
   //   let temp = 1;
   //  if(num === 0){
   //   return 1;
   //  }
   //   for(let i= num; i >=1; i--){
   // temp = temp * i;
   //   }
   // return temp;
   
   // }
   
   
   console.log(factorial(5));