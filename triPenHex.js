const solution = (n) => {
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

  const MIN_T = 285;
  const MIN_P = 165;
  const MIN_H = 143;
  const tArr = [];
  const pArr = [];
  const hArr = [];

  for (let i = 0; i < n; i++) {
    const curT = MIN_T + i;
    tArr.push((curT * (curT + 1)) / 2);
    const curP = MIN_P + i;
    pArr.push((curP * (3 * curP - 1)) / 2);
    const curH = MIN_H + i;
    hArr.push(curH * (2 * curH - 1));
  }
  for (let i = 0; i < hArr.length; i++) {
    if (bs(tArr, hArr[i]) && bs(pArr, hArr[i])) {
      console.log(hArr[i]);
      //console.log(i);
    }
  }
};

//55101 iterations enougth to get answer
solution(55101);

//50000000 can reach next such number
//solution(50000000);

/* 
Task link: https://projecteuler.net/problem=45
Answer:    1533776805
Time out:  0,14s user 0,02s system 102% cpu 0,156 total
*/