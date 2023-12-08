import part1, { firstAndLastDigitsAsNumber } from "./part1";

describe("day1/part1", () => {
  it("should work out the result", () => {
    const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    expect(part1(input)).toEqual(142);
  });
});
describe("day1/firstAndLastDigitsAsNumber", () => {
  it("should work out 1abc2 gives 12", () => {
    const input = "1abc2";
    expect(firstAndLastDigitsAsNumber(input)).toEqual(12);
  });
  it("should work out pqr3stu8vwx gives 38", () => {
    const input = "pqr3stu8vwx";
    expect(firstAndLastDigitsAsNumber(input)).toEqual(38);
  });
  it("should work out a1b2c3d4e5f gives 15", () => {
    const input = "a1b2c3d4e5f";
    expect(firstAndLastDigitsAsNumber(input)).toEqual(15);
  });
  it("should work out treb7uchet gives 77", () => {
    const input = "treb7uchet";
    expect(firstAndLastDigitsAsNumber(input)).toEqual(77);
  });
});
