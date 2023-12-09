import { Bag } from "./bag";
import fileReadHandler from "./file-read-handler";
import { Game } from "./game";

describe("day2/file-read-handler", () => {
  it("should read in strings and convert them to numbers", () => {
    const lines = [
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ];
    const accumulator: Array<Game> = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
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
    ]);
  });
});
