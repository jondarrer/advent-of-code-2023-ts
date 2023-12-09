export class Bag {
  red?: number = 0;
  green?: number = 0;
  blue?: number = 0;

  constructor(options?: { red?: number; green?: number; blue?: number }) {
    if (options) {
      this.red = options.red | 0;
      this.green = options.green | 0;
      this.blue = options.blue | 0;
    }
  }
}
