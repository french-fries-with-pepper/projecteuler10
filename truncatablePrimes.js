const solution = () => {
  const MAX = 1000000;
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
  const getAllPrimesToN = (n) => {
    const arr = new Array(n).fill(true);
    for (let i = 2; i ** 2 <= n; i++) {
      if (arr[i]) {
        for (let c = 0; ; c++) {
          let j = i ** 2 + c * i;
          if (j > n) break;
          arr[j] = false;
        }
      }
    }
    const res = [];
    arr.forEach((el, i) => {
      if (el) res.push(i);
    });
    return res.slice(2);
  };
  const primes = getAllPrimesToN(MAX);
  const truncLeft = [];
  for (let i = 4; i < primes.length; i++) {
    let el = primes[i];
    let isTruncable = true;
    while (el > 10) {
      el = parseInt(`${el}`.slice(1));
      if (!bs(primes, el)) {
        isTruncable = false;
        break;
      }
    }
    if (isTruncable) {
      //console.log(primes[i]);
      truncLeft.push(primes[i]);
    }
  }
  const truncRight = [];
  for (let i = 0; i < truncLeft.length; i++) {
    let el = truncLeft[i];
    let isTruncable = true;
    while (el > 10) {
      el = parseInt(`${el}`.slice(0, -1));
      if (!bs(primes, el)) {
        isTruncable = false;
        break;
      }
    }
    if (isTruncable) {
      console.log(truncLeft[i]);
      truncRight.push(truncLeft[i]);
    }
  }
  return truncRight.reduce((acc, el) => acc + el, 0);
};

console.log(solution());

//answer is 748317
