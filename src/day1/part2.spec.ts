import part2, {
  firstAndLastDigitsAsNumberIncludingSpelledOutDigits,
  spelledOutDigitToInteger,
  SPELLED_OUT_DIGITS,
} from "./part2";

describe("day1/part2", () => {
  it("should work out the result", () => {
    const input = [
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen",
    ];
    expect(part2(input)).toEqual(281);
  });
});
describe("day1/firstAndLastDigitsAsNumberIncludingSpelledOutDigits", () => {
  it("should work out two1nine gives 29", () => {
    const input = "two1nine";
    expect(firstAndLastDigitsAsNumberIncludingSpelledOutDigits(input)).toEqual(
      29
    );
  });
  it("should work out eightwothree gives 83", () => {
    const input = "eightwothree";
    expect(firstAndLastDigitsAsNumberIncludingSpelledOutDigits(input)).toEqual(
      83
    );
  });
  it("should work out abcone2threexyz gives 13", () => {
    const input = "abcone2threexyz";
    expect(firstAndLastDigitsAsNumberIncludingSpelledOutDigits(input)).toEqual(
      13
    );
  });
  it("should work out xtwone3four gives 24", () => {
    const input = "xtwone3four";
    expect(firstAndLastDigitsAsNumberIncludingSpelledOutDigits(input)).toEqual(
      24
    );
  });
  it("should work out 4nineeightseven2 gives 42", () => {
    const input = "4nineeightseven2";
    expect(firstAndLastDigitsAsNumberIncludingSpelledOutDigits(input)).toEqual(
      42
    );
  });
  it("should work out zoneight234 gives 14", () => {
    const input = "zoneight234";
    expect(firstAndLastDigitsAsNumberIncludingSpelledOutDigits(input)).toEqual(
      14
    );
  });
  it("should work out 7pqrstsixteen gives 76", () => {
    const input = "7pqrstsixteen";
    expect(firstAndLastDigitsAsNumberIncludingSpelledOutDigits(input)).toEqual(
      76
    );
  });
  it("should work out zoneight gives 11", () => {
    const input = "zoneight";
    expect(firstAndLastDigitsAsNumberIncludingSpelledOutDigits(input)).toEqual(
      11
    );
  });
});
describe("day1/spelledOutDigitToInteger", () => {
  it("should work out the digit 1 from abcone2threexyz at index 3", () => {
    const input = "abcone2threexyz";
    const currentIndex = 3;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toEqual(1);
  });
  it("should work out the digit 2 from xtwone3four at index 1", () => {
    const input = "xtwone3four";
    const currentIndex = 1;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toEqual(2);
  });
  it("should work out the digit 3 from abcone2threexyz at index 7", () => {
    const input = "abcone2threexyz";
    const currentIndex = 7;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toEqual(3);
  });
  it("should work out the digit 4 from xtwone3four at index 7", () => {
    const input = "xtwone3four";
    const currentIndex = 7;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toEqual(4);
  });
  it("should work out the digit 5 from two1five at index 4", () => {
    const input = "two1five";
    const currentIndex = 4;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toEqual(5);
  });
  it("should work out the digit 6 from 7pqrstsixteen at index 6", () => {
    const input = "7pqrstsixteen";
    const currentIndex = 6;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toEqual(6);
  });
  it("should work out the digit 7 from 4nineeightseven2 at index 10", () => {
    const input = "4nineeightseven2";
    const currentIndex = 10;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toEqual(7);
  });
  it("should work out the digit 8 from zoneight234 at index 3", () => {
    const input = "zoneight234";
    const currentIndex = 3;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toEqual(8);
  });
  it("should work out the digit 9 from 4nineeightseven2 at index 1", () => {
    const input = "4nineeightseven2";
    const currentIndex = 1;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toEqual(9);
  });
  it("should not work out the digit 9 from 4nineeightseven2 at index 0", () => {
    const input = "4nineeightseven2";
    const currentIndex = 0;
    expect(
      spelledOutDigitToInteger(input, currentIndex, SPELLED_OUT_DIGITS)
    ).toBeNull();
  });
});
