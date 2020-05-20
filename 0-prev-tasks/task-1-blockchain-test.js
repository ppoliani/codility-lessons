const nextChar = (s, i) => s[i];
const isDelimeter = c => c === "#";
const isOpeningParen = c => c === "(";

// extracts the count from the parenthesis
const getCount = (s, i) => {
  if (s[i] !== "(") {
    return [i, 1];
  }

  i += 1;

  const register = [];

  while (s[i] !== ")") {
    register.push(s[i]);
    i += 1;
  }

  return [i + 1, Number(register.join(""))];
};

const first = arr => arr[0];
const last = arr => arr[arr.length - 1];

const increaseCount = (current, addedNum) => (current || 0) + addedNum;

const initArray = () => Array.from(new Array(26), () => 0);

const toArray = counts =>
  Object.entries(counts).reduce((acc, [char, count]) => {
    acc[char.charCodeAt(0) - 97] = count;
    return acc;
  }, initArray());

const toNum = ascii => Number(ascii.replace("#", ""));
const getEncoding = ascii => String.fromCharCode(toNum(ascii) + 96);

const frequency = s => {
  const charCount = {};
  const register = [];
  let i = 0;

  while (Boolean(s[i])) {
    const char = nextChar(s, i);
    register.push(char);

    if (isOpeningParen(char)) {
      // remove the last char which is (
      register.pop();

      const [nextIndex, count] = getCount(s, i);
      const decodedChar = getEncoding(first(register));
      const decodedChar2 = getEncoding(last(register));

      if (register.length === 1) {
        charCount[decodedChar2] = increaseCount(charCount[decodedChar2], count);
      } else {
        charCount[decodedChar] = increaseCount(charCount[decodedChar], 1);
        charCount[decodedChar2] = increaseCount(charCount[decodedChar2], count);
      }

      register.length = 0;
      i = nextIndex;
    } else if (isDelimeter(char)) {
      const [nextIndex, count] = getCount(s, i + 1);
      const decodedChar = getEncoding(register.join(""));

      charCount[decodedChar] = increaseCount(charCount[decodedChar], count);

      i = nextIndex;
      register.length = 0;
    } else if (register.length > 2) {
      const arr = register.splice(0, 2);

      arr.forEach(c => {
        const decodedChar = getEncoding(c);
        charCount[decodedChar] = increaseCount(charCount[decodedChar], 1);
      });

      i += 1;
    } else {
      i += 1;
    }
  }

  return toArray(charCount);
};

// console.table(frequency("23#(2)5(10)24#(3)21#(5)"));
// console.table(frequency("23#5(10)24#(3)21#(5)"));
console.table(frequency("23#(2)56(10)24#(3)21#(5)"));
