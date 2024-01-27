import { Ship } from "./ship";

class Gameboard {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.board = this.#createBoard(rows, columns);
  }

  #createBoard(rows, columns) {
    const board = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push({
          isShip: false,
          ship: null,
          isHit: false,
        });
      }
      board.push(row);
    }

    return board;
  }

  placeShip(length, orientation, coordinates) {
    // Orientation is horizontal or vertical
    // 0 = horizontal
    // 1 = vertical

    if (this.#isValidPlacement(length, orientation, coordinates)) {
      const ship = new Ship(length);
      // Row and column start
      const rStart = coordinates[0];
      const cStart = coordinates[1];

      if (orientation === 0) {
        for (let i = cStart; i < cStart + length; i++) {
          this.board[rStart][i] = { isShip: true, ship: ship, isHit: false };
        }
      } else {
        for (let i = rStart; i < rStart + length; i++) {
          this.board[i][cStart] = { isShip: true, ship: ship, isHit: false };
        }
      }

      // Successfully placed.
      return true;
    }

    // Failed to place.
    return false;
  }

  #isValidPlacement(length, orientation, coordinates) {
    // Row and column start
    const xStart = coordinates[0];
    const yStart = coordinates[1];

    // Orientation = 0 (horizontal)
    if (orientation === 0) {
      for (let i = xStart; i < xStart + length; i++) {
        // Out of bounds check
        if (!this.#isInBound(i, yStart)) {
          return false;
        }

        // Check if ship already occupying space
        if (this.board[xStart][i].isShip) {
          return false
        }
      }
    }

    // Orientation = 1 (vertical)
    else {
      for (let i = yStart; i < yStart + length; i++) {
        // Out of bounds check
        if (!this.#isInBound(xStart, i)) {
          return false;
        }

        // Check if ship already occupying space
        if (this.board[i][yStart].isShip) {
          return false;
        }
      }
    }

    return true;
  }

  #isInBound(x, y) {
    const xCoordMax = this.board[0].length - 1;
    const yCoordMax = this.board.length - 1;

    if (x >= xCoordMax) {
      return false;
    } else if (x < 0) {
      return false;
    }

    if (y >= yCoordMax) {
      return false;
    } else if (y < 0) {
      return false;
    }

    return true;
  }
}

export { Gameboard };
