import part1, {
  findStartPosition,
  inferStartDirections,
  isValidPosition,
  determineNextDirection,
  moveInDirection,
} from "./part1";

const TEST_GRID = [
  ["7", "-", "F", "7", "-"],
  [".", "F", "J", "|", "7"],
  ["S", "J", "L", "L", "7"],
  ["|", "F", "-", "-", "J"],
  ["L", "J", ".", "L", "J"],
];

describe("day10/part1", () => {
  it("should work out the result", () => {
    expect(part1(TEST_GRID)).toEqual(8);
  });
});
describe("day10/findStartPosition", () => {
  it("should work out the start position", () => {
    expect(
      findStartPosition([
        ["7", "-", "F", "7", "-"],
        [".", "F", "J", "|", "7"],
        ["S", "J", "L", "L", "7"],
        ["|", "F", "-", "-", "J"],
        ["L", "J", ".", "L", "J"],
      ])
    ).toEqual([0, 2]);
  });
});
describe("day10/inferStartDirection", () => {
  it("should work out the start position", () => {
    expect(inferStartDirections(TEST_GRID, [0, 2])).toEqual(["E", "S"]);
  });
});
describe("day10/isValidPosition", () => {
  it.each([
    [[0, 0], true],
    [[4, 4], true],
    [[5, 4], false],
    [[-1, 4], false],
    [[4, -1], false],
  ])(
    "should work out the position %s is/is not valid %s",
    (position: Array<number>, expected: boolean) => {
      expect(isValidPosition(TEST_GRID, position)).toEqual(expected);
    }
  );
});
describe("day10/determineNextDirection", () => {
  it.each([
    ["|", "N", "N"],
    ["|", "S", "S"],
    ["-", "E", "E"],
    ["-", "W", "W"],
    ["L", "S", "E"],
    ["L", "W", "N"],
    ["J", "S", "W"],
    ["J", "E", "N"],
    ["7", "N", "W"],
    ["7", "E", "S"],
    ["F", "N", "E"],
    ["F", "W", "S"],
  ])(
    "should work out the next direction for tile %s with previous %s to be %s",
    (currentTile: string, previousDirection: string, expected: string) => {
      expect(determineNextDirection(currentTile, previousDirection)).toEqual(
        expected
      );
    }
  );
});
describe("day10/moveInDirection", () => {
  it.each([
    [[1, 2], "N", [1, 1]],
    [[1, 2], "E", [2, 2]],
    [[1, 2], "S", [1, 3]],
    [[1, 2], "W", [0, 2]],
  ])(
    "should work out the next direction for tile %s with previous %s to be %s",
    (
      currentPosition: Array<number>,
      direction: string,
      expected: Array<number>
    ) => {
      expect(moveInDirection(currentPosition, direction)).toEqual(expected);
    }
  );
});
