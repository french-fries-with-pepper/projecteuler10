function setsAreEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  return Array.from(a).every((element) => {
    return b.has(element);
  });
}

const isPremutation = (a, b) => {
  const set1 = new Set(`${a}`.split(""));
  const set2 = new Set(`${b}`.split(""));
  return setsAreEqual(set1, set2);
};

const MUL_MAX = 6;
const MAX_NUMBER = 1000000;

for (let i = 1; i < MAX_NUMBER; i++) {
  let currentMatches = 1;
  for (let j = 1; j < MUL_MAX; j++) {
    if (isPremutation(i, i * j)) {
      currentMatches++;
    } else {
      break;
    }
  }

  if (currentMatches === MUL_MAX) {
    console.log(i);
    break;
  }
  currentMatches = 1;
}

/* 
Task link: https://projecteuler.net/problem=52
Answer:    142857
Time out:  0,59s user 0,02s system 104% cpu 0,584 total
*/
