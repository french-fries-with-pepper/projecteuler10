const MAX_TEST_VALUE = 5000;

const pArr = [];
const sumArr = [];
const diffArr = [];

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

for (let i = 1; i < MAX_TEST_VALUE * 2; i++) {
  pArr.push((i * (3 * i - 1)) / 2);
}

console.log("penta nums are generated...");

for (let i = 0; i < MAX_TEST_VALUE; i++) {
  for (let j = i; j < MAX_TEST_VALUE; j++) {
    const sum = pArr[i] + pArr[j];
    if (bs(pArr, sum)) {
      sumArr.push([pArr[i], pArr[j]]);
    }
  }
}

console.log(`sums length = ${sumArr.length}`);

for (let i = 0; i < sumArr.length; i++) {
  const diff = sumArr[i][1] - sumArr[i][0];
  if (bs(pArr, diff)) {
    console.log(`${sumArr[i][1]} - ${sumArr[i][0]} = ${diff}`);
    diffArr.push(diff);
  }
}

console.log(diffArr);
