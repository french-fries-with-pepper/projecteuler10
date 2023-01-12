const fs = require("fs");

const nameToScore = (name, pos) =>
  name.split("").reduce((acc, el) => acc + (el.charCodeAt(0) - 64) * pos, 0);

const removeQuotes = (str) => str.substring(1, str.length - 1);
const data = fs.readFileSync("./p022_names.txt", "utf-8");
let result = 0;
data
  .split(",")
  .sort()
  .map(removeQuotes)
  .forEach((el, idx) => {
    result += nameToScore(el, idx + 1);
  });
console.log(result);

// answer is 871198282
