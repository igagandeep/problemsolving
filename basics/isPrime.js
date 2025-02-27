function isPrime(num){

    if(num === 0 || num ===1) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  }
  
  function printPrime(min, max){
    let arr = [];
  
    for(let i = min; i <= max; i++){
      if(isPrime(i)){
        arr.push(i)
      }
    }
  
    console.log(...arr);
  }
  
  printPrime(0, 29);
  