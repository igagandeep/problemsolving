function sum(arr) {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let res = 0;
  for (let i = min; i <= max; i++) {
    res += i;
  }
  return res;
}

console.log(sum([1, 5]));
