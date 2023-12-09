const part1 = (input: Array<string>): number => {
  return input.reduce(
    (prev, line) => prev + firstAndLastDigitsAsNumber(line),
    0
  );
};

const firstAndLastDigitsAsNumber = (arg: string): number => {
  let nos: Array<number> = [];

  for (let i = 0; i < arg.length; i++) {
    const char = arg.charAt(i);
    if (isInteger(char)) {
      if (nos.length === 0) {
        nos.push(parseInt(char));
        nos.push(parseInt(char));
      } else {
        nos[1] = parseInt(char);
      }
    }
  }
  return parseInt(nos.join(""));
};

const isInteger = (value: string): boolean => {
  if (parseInt(value, 10).toString() === value) {
    return true;
  }
  return false;
};

export default part1;
export { firstAndLastDigitsAsNumber, isInteger };
