const part1 = (input: Array<Array<string>>): number => {
  const startPosition = findStartPosition(input);
  const startDirections = inferStartDirections(input, startPosition);
  let currentPosition: Array<number> = startPosition;
  let nextPosition: Array<number>;
  let currentDirection: string = startDirections[0];
  let nextDirection: string;
  let currentTile = "S";
  let nextTile;
  const movements: Array<Array<number>> = [];

  while (true) {
    nextPosition = moveInDirection(currentPosition, currentDirection);
    movements.push(nextPosition);
    nextTile = getTile(input, nextPosition);
    nextDirection = determineNextDirection(nextTile, currentDirection);
    if (nextTile === "S") {
      break;
    }
    currentPosition = nextPosition;
    currentDirection = nextDirection;
    currentTile = nextTile;
  }

  // console.log({ movements });

  return movements.length / 2;
};

const findStartPosition = (grid: Array<Array<string>>): Array<number> => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "S") return [j, i];
    }
  }
};

const inferStartDirections = (
  grid: Array<Array<string>>,
  startPosition: Array<number>
): Array<string> => {
  const directions = ["N", "E", "S", "W"];
  const startDirections: Array<string> = [];
  const validOptions = {
    N: ["|", "7", "F"],
    E: ["-", "J", "7"],
    S: ["|", "L", "J"],
    W: ["-", "L", "F"],
  };

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const nextPosition = moveInDirection(startPosition, direction);
    if (isValidPosition(grid, nextPosition)) {
      const nextTile = getTile(grid, nextPosition);

      if (validOptions[direction].includes(nextTile)) {
        startDirections.push(direction);
      }
    }
  }

  return startDirections;
};

const isValidPosition = (
  grid: Array<Array<string>>,
  position: Array<number>
): boolean => {
  if (position[0] < 0) {
    return false;
  }
  if (position[1] < 0) {
    return false;
  }
  if (position[0] > grid.length - 1) {
    return false;
  }
  if (position[1] > grid[0].length - 1) {
    return false;
  }

  return true;
};

const getTile = (grid: Array<Array<string>>, position: Array<number>): string =>
  grid[position[1]][position[0]];

const determineNextDirection = (
  currentTile: string,
  previousDirection: string
) => {
  switch (currentTile) {
    case "|":
      switch (previousDirection) {
        case "N":
        case "S":
          return previousDirection;
        default:
          throw Error(
            `Unexpected next direction in tile ${currentTile} moving ${previousDirection}`
          );
      }
    case "-":
      switch (previousDirection) {
        case "E":
        case "W":
          return previousDirection;
        default:
          throw Error(
            `Unexpected next direction in tile ${currentTile} moving ${previousDirection}`
          );
      }
    case "L":
      switch (previousDirection) {
        case "S":
          return "E";
        case "W":
          return "N";
        default:
          throw Error(
            `Unexpected next direction in tile ${currentTile} moving ${previousDirection}`
          );
      }
    case "J":
      switch (previousDirection) {
        case "S":
          return "W";
        case "E":
          return "N";
        default:
          throw Error(
            `Unexpected next direction in tile ${currentTile} moving ${previousDirection}`
          );
      }
    case "7":
      switch (previousDirection) {
        case "N":
          return "W";
        case "E":
          return "S";
        default:
          throw Error(
            `Unexpected next direction in tile ${currentTile} moving ${previousDirection}`
          );
      }
    case "F":
      switch (previousDirection) {
        case "N":
          return "E";
        case "W":
          return "S";
        default:
          throw Error(
            `Unexpected next direction in tile ${currentTile} moving ${previousDirection}`
          );
      }
    case ".":
      throw new Error(
        `Cannot perform a move on ground! Was moving ${previousDirection}`
      );
    case "S":
      return null;
  }
};

const moveInDirection = (currentPosition: Array<number>, direction: string) => {
  switch (direction) {
    case "N":
      return [currentPosition[0], currentPosition[1] - 1];
    case "E":
      return [currentPosition[0] + 1, currentPosition[1]];
    case "S":
      return [currentPosition[0], currentPosition[1] + 1];
    case "W":
      return [currentPosition[0] - 1, currentPosition[1]];
  }
};

export default part1;
export {
  findStartPosition,
  inferStartDirections,
  isValidPosition,
  determineNextDirection,
  moveInDirection,
};
