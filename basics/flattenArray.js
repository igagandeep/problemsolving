function flattenArray(arr) {

    return arr.flat(Infinity)
    
    }
    
    arr = [1, [2], [3, [[4]]]]
    
    console.log(flattenArray(arr));