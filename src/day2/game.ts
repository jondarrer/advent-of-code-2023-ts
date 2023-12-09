import { Bag } from "./bag";

export class Game {
  id: number;
  bags: Array<Bag>;

  constructor(options?: { id: number; bags: Array<Bag> }) {
    if (options) {
      this.id = options.id;
      this.bags = options.bags;
    }
  }
}
