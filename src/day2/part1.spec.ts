import { Bag } from "./bag";
import { Game } from "./game";
import part1, { isGamePossibleWithBag } from "./part1";

describe("day2/part1", () => {
  it("should work out the result", () => {
    const input = [
      new Game({
        id: 1,
        bags: [
          new Bag({ blue: 3, red: 4 }),
          new Bag({ red: 1, green: 2, blue: 6 }),
          new Bag({ green: 2 }),
        ],
      }),
      new Game({
        id: 2,
        bags: [
          new Bag({ blue: 1, green: 2 }),
          new Bag({ green: 3, blue: 4, red: 1 }),
          new Bag({ green: 1, blue: 1 }),
        ],
      }),
      new Game({
        id: 3,
        bags: [
          new Bag({ green: 8, blue: 6, red: 20 }),
          new Bag({ blue: 5, red: 4, green: 13 }),
          new Bag({ green: 5, red: 1 }),
        ],
      }),
      new Game({
        id: 4,
        bags: [
          new Bag({ green: 1, red: 3, blue: 6 }),
          new Bag({ green: 3, red: 6 }),
          new Bag({ green: 3, blue: 15, red: 14 }),
        ],
      }),
      new Game({
        id: 5,
        bags: [
          new Bag({ red: 6, blue: 1, green: 3 }),
          new Bag({ blue: 2, red: 1, green: 2 }),
        ],
      }),
    ];
    expect(part1(input)).toEqual(8);
  });
});
describe("day2/isGamePossibleWithBag", () => {
  const TEST_BAG = new Bag({ red: 12, green: 13, blue: 14 });
  it("should work out 1st game is possible with TEST_BAG", () => {
    const game = new Game({
      id: 1,
      bags: [
        new Bag({ blue: 3, red: 4 }),
        new Bag({ red: 1, green: 2, blue: 6 }),
        new Bag({ green: 2 }),
      ],
    });
    expect(isGamePossibleWithBag(game, TEST_BAG)).toBeTruthy();
  });
  it("should work out 2nd game is possible with TEST_BAG", () => {
    const game = new Game({
      id: 2,
      bags: [
        new Bag({ blue: 1, green: 2 }),
        new Bag({ green: 3, blue: 4, red: 1 }),
        new Bag({ green: 1, blue: 1 }),
      ],
    });
    expect(isGamePossibleWithBag(game, TEST_BAG)).toBeTruthy();
  });
  it("should work out 3rd game is NOT possible with TEST_BAG", () => {
    const game = new Game({
      id: 3,
      bags: [
        new Bag({ green: 8, blue: 6, red: 20 }),
        new Bag({ blue: 5, red: 4, green: 13 }),
        new Bag({ green: 5, red: 1 }),
      ],
    });
    expect(isGamePossibleWithBag(game, TEST_BAG)).toBeFalsy();
  });
  it("should work out 4th game is NOT possible with TEST_BAG", () => {
    const game = new Game({
      id: 4,
      bags: [
        new Bag({ green: 1, red: 3, blue: 6 }),
        new Bag({ green: 3, red: 6 }),
        new Bag({ green: 3, blue: 15, red: 14 }),
      ],
    });
    expect(isGamePossibleWithBag(game, TEST_BAG)).toBeFalsy();
  });
  it("should work out 5th game is possible with TEST_BAG", () => {
    const game = new Game({
      id: 5,
      bags: [
        new Bag({ red: 6, blue: 1, green: 3 }),
        new Bag({ blue: 2, red: 1, green: 2 }),
      ],
    });
    expect(isGamePossibleWithBag(game, TEST_BAG)).toBeTruthy();
  });
});
