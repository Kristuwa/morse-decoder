const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here

  const num = expr.length / 10;
  let arr = [];
  for (let i = 0; i < num; i += 1) {
    arr.push(expr.slice(i * 10, (i + 1) * 10));
  }
  const newArrMorze = arr.reduce((acc, item) => {
    let str = "";
    const number = item.length / 2;
    for (let i = 0; i < number; i += 1) {
      const j = item.slice(i * 2, (i + 1) * 2);
      if (j === "10") {
        str += ".";
      } else if (j === "11") {
        str += "-";
      } else if (j === "**") {
        str += " ";
      }
      str += "";
    }
    acc.push(str);
    return acc;
  }, []);

  const letterStr = newArrMorze.reduce((acc, item) => {
    if (item === "     ") {
      return (acc += " ");
    } else if (MORSE_TABLE.hasOwnProperty(item)) {
      acc += MORSE_TABLE[item];
    } else {
      acc += "";
    }

    return acc;
  }, "");
  return letterStr;
}

module.exports = {
  decode,
};
console.log(
  decode(
    "00000000100000111010101010111100111011100000001011111110101011111010101010101010"
  )
);
