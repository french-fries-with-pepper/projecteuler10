const fs = require("fs");

// generate triangle numbers to N
const genTriangles = (n) =>
  Array.from({ length: n }, (_, i) => (i * (i + 1)) / 2);

//binary search, can be moved in seporate module.
let bs = function (sorted_arr, target) {
  let start = 0,
    end = sorted_arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sorted_arr[mid] == target) return true;
    else if (sorted_arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};
const removeQuotes = (str) => str.substring(1, str.length - 1);

const readWords = (path) => {
  return fs.readFileSync(path, "utf-8").split(",").map(removeQuotes);
};

const wordToNumber = (word) =>
  word.split("").reduce((acc, el) => acc + el.charCodeAt(0) - 64, 0);

const solution = () => {
  const words = readWords("./p042_words.txt");
  const tArr = genTriangles(1000);
  return words.filter((w) => bs(tArr, wordToNumber(w))).length;
};

console.log(solution());

/* 
Task link: https://projecteuler.net/problem=42  
Answer:    162
Time out:  0,08s user 0,02s system 103% cpu 0,095 total
*/
