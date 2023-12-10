import fileReadHandler from "./file-read-handler";

describe("day10/file-read-handler", () => {
  it("should read in strings and convert them to numbers", () => {
    const lines = ["7-F7-", ".FJ|7", "SJLL7", "|F--J", "LJ.LJ"];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      ["7", "-", "F", "7", "-"],
      [".", "F", "J", "|", "7"],
      ["S", "J", "L", "L", "7"],
      ["|", "F", "-", "-", "J"],
      ["L", "J", ".", "L", "J"],
    ]);
  });
});
