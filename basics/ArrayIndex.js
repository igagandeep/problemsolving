function createArray(nums, index) {

    const arr = [];
  
  
    for(let i = 0; i <nums.length; i++){
       arr.splice(index[i], 0, nums[i])
    }
  
  console.log(arr);
  }
  
  nums = [0,1,2,3,4]
  index = [0,1,2,2,1]
  
  createArray(nums, index)
  //  - Returns [0,4,1,3,2]