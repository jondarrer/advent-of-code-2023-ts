import { isInteger } from "./part1";

const SPELLED_OUT_DIGITS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const part2 = (input: Array<string>): number => {
  return input.reduce((prev, line) => {
    const value = firstAndLastDigitsAsNumberIncludingSpelledOutDigits(line);
    console.log({ line, value });
    return prev + value;
  }, 0);
};

const firstAndLastDigitsAsNumberIncludingSpelledOutDigits = (
  arg: string
): number => {
  let nos: Array<number> = [];

  for (let i = 0; i < arg.length; i++) {
    let parsedInt = null;

    if (isInteger(arg.charAt(i))) {
      parsedInt = parseInt(arg.charAt(i));
    } else {
      parsedInt = spelledOutDigitToInteger(arg, i, SPELLED_OUT_DIGITS);

      if (parsedInt !== null) {
        i = i + SPELLED_OUT_DIGITS[parsedInt - 1].length - 1;
      }
    }

    if (parsedInt !== null) {
      if (nos.length === 0) {
        nos.push(parsedInt);
        nos.push(parsedInt);
      } else {
        nos[1] = parsedInt;
      }
    }
  }
  return parseInt(nos.join(""));
};

const spelledOutDigitToInteger = (
  arg: string,
  currentIndex: number,
  spelledOutDigits: Array<string>
): number | null => {
  for (let i = 0; i < spelledOutDigits.length; i++) {
    const spelledOutDigit = spelledOutDigits[i];

    if (
      arg.substring(currentIndex, currentIndex + spelledOutDigit.length) ===
      spelledOutDigit
    ) {
      return i + 1;
    }
  }

  return null;
};

export default part2;
export {
  firstAndLastDigitsAsNumberIncludingSpelledOutDigits,
  spelledOutDigitToInteger,
  SPELLED_OUT_DIGITS,
};
