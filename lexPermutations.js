const arr = [];
// get all permutations of given string.
function permute(str, l, r) {
  if (l == r) arr.push(str);
  else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
}
// helper - swap two chars in given string
function swap(a, i, j) {
  let charArray = a.split("");
  [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  return charArray.join("");
}
let str = "0123456789";
let n = str.length;
permute(str, 0, n - 1);

arr.sort();
console.log(arr[999999]);

/* 
Task link: https://projecteuler.net/problem=24  
Answer:    2783915460
Time out:  12,21s user 0,23s system 106% cpu 11,652 total

Need to think about improoving permute function - may be, iterative approach will be faster.
And generating permutations can be run in parallel, but it more complicated. 
Also without sorting time is faster about 25%, so we can use Heap, to avoid sorting, after generating all permutations.
*/
