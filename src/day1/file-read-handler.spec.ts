import fileReadHandler from "./file-read-handler";

describe("day1/file-read-handler", () => {
  it("should read in strings and convert them to numbers", () => {
    const lines = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      "1abc2",
      "pqr3stu8vwx",
      "a1b2c3d4e5f",
      "treb7uchet",
    ]);
  });
});
