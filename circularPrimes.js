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

  const primes = getAllPrimesToN(n);
  const isCircularPrime = (n) => {
    if (n < 10) {
      return true;
    }
    const str = `${n}`.split("");
    let l = str.length;
    while (l > 1) {
      const tmp = str.pop();
      str.unshift(tmp);
      const circular = parseInt(str.join(""), 10);
      if (!bs(primes, circular)) return false;
      l--;
    }
    return true;
  };
  const circular = primes.filter(isCircularPrime);
  console.log(circular);
  console.log(`Answer is ${circular.length}`);
  return circular.length;
};

solution(1000000);
