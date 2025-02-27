function fib(num){
    if(num === 0) {
      console.log(num)
      return
    }
    if(num === 1){
      console.log(num);
      return;
    }
  
    const arr = [0,1];
  
    for(let i = 2; i < num; i++ ){
      arr[i] = arr[i-1] + arr[i-2];
    }
    console.log(...arr);
  }
  
  fib(0);