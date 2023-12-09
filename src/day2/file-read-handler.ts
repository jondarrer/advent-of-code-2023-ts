import { Bag } from "./bag";
import { Game } from "./game";
// const BAG_REGEX = /(\d+ blue)/gm;
const BAG_REGEX = /((?<blue>\d+ blue)|(?<red>\d+ red)|(?<green>\d+ green))+/m;

const fileReadHandler = (accumulator: Array<Game>, line: string): void => {
  const game = new Game();

  // Get the Game id
  const indexOfColon = line.indexOf(":");

  // const regex = /Game \d+:/gm;
  const id = line.substring("Game ".length, indexOfColon);
  game.id = parseInt(id);
  game.bags = parseBags(line, indexOfColon);
  accumulator.push(game);
};

const parseBags = (line: string, indexOfColon: number): Array<Bag> => {
  return line
    .substring(indexOfColon + 2)
    .split("; ")
    .map((part) => parseBag(part));
};

const parseBag = (part: string): Bag => {
  const bag = new Bag();
  const bits = part.split(", ");

  for (let i = 0; i < bits.length; i++) {
    const stuff = bits[i].split(" ");
    switch (stuff[1]) {
      case "red":
        bag.red = parseInt(stuff[0]);
        break;
      case "green":
        bag.green = parseInt(stuff[0]);
        break;
      case "blue":
        bag.blue = parseInt(stuff[0]);
        break;
    }
  }

  return bag;
};

export default fileReadHandler;
