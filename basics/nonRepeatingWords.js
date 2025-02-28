function nonRepeatingWords(str1, str2) {

    const arr1 = str1.split(" ");
    const arr2 = str2.split(" ");

    return arr1.filter((d) => !arr2.includes(d))
    


}



str1 = 'Hello world'
str2 = 'Hello Vishwas'

nonRepeatingWords(str1, str2)
// - Returns ['world', 'Vishwas']


// function nonRepeatingWords (str1, str2) {
//     const map = new Map()
//     const res = []
//     // Concatenate the strings
//     const str = str1 + ' ' + str2
//     // Count the occurrence of each word
//     str.split(' ').forEach(word => {
//       map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1)
//     })
//     // Select words which occur only once
//     for (let [key, val] of map) {
//       if (val === 1) {
//         res.push(key)
//       }
//     }
//     return res
//   }
  