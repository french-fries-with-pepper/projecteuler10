const solution = (n) => {
  const isPalindromeArr = (arr) => {
    if (arr.length === 1) return true;
    const l = arr.length;
    for (let i = 0; i < l >> 1; i++) {
      if (arr[i] !== arr[l - i - 1]) return false;
    }
    return true;
  };
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const decArr = i.toString(10).split("");
    const binArr = i.toString(2).split("");
    if (isPalindromeArr(binArr) && isPalindromeArr(decArr)) {
      console.log(i);
      answer += i;
    }
  }
  console.log(`answer is: ${answer}`);
  return answer;
};
solution(1000000);
