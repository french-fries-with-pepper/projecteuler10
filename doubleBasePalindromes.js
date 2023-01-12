const solution = (n) => {
  const isPalindromeStr = (str) => {
    if (str.length === 1) return true;
    const l = str.length;
    for (let i = 0; i < l >> 1; i++) {
      if (str[i] !== str[l - i - 1]) return false;
    }
    return true;
  };
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const decArr = i.toString(10);
    const binArr = i.toString(2);
    if (isPalindromeStr(binArr) && isPalindromeStr(decArr)) {
      console.log(i);
      answer += i;
    }
  }
  console.log(`answer is: ${answer}`);
  return answer;
};
solution(1000000);

/* 
Task link: https://projecteuler.net/problem=36  
Answer:    872187
Time out:  0,87s user 0,04s system 101% cpu 0,896 total
*/
