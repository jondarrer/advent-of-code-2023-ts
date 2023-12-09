import { Bag } from "./bag";
import { Game } from "./game";

const BAG = new Bag({ red: 12, green: 13, blue: 14 });

const part1 = (input: Array<Game>): number => {
  return input.reduce((prev, cur) => {
    if (isGamePossibleWithBag(cur, BAG)) {
      return prev + cur.id;
    } else {
      return prev;
    }
  }, 0);
};

const isGamePossibleWithBag = (game: Game, bag: Bag): boolean => {
  for (let i = 0; i < game.bags.length; i++) {
    const gameBag = game.bags[i];
    if (
      gameBag.red > bag.red ||
      gameBag.green > bag.green ||
      gameBag.blue > bag.blue
    ) {
      return false;
    }
  }

  return true;
};

export default part1;
export { isGamePossibleWithBag };
