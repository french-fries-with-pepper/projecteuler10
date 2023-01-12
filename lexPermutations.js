const arr = [];
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
