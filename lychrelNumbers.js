const solution = () => {
  const MAX_ITER = 50;
  const LAST_NUMBER = 10000;
  const isPalindromeStr = (str) => {
    if (str.length === 1) return true;
    const l = str.length;
    for (let i = 0; i < l >> 1; i++) {
      if (str[i] !== str[l - i - 1]) return false;
    }
    return true;
  };
  let count = 0;
  for (let i = 0; i < LAST_NUMBER; i++) {
    let current = i;
    for (let j = 0; j < MAX_ITER; j++) {
      current += parseInt(`${current}`.split("").reverse().join(""));
      if (isPalindromeStr(`${current}`)) {
        break;
      }
    }
    if (!isPalindromeStr(`${current}`)) {
      console.log(`number is ${i}, reduce to ${current}`);
      count++;
    }
  }

  return count;
};

console.log(solution());
