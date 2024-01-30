import { Ship } from "./ship";

class Gameboard {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.board = this.#createBoard(rows, columns);
    this.ships = [];
  }

  #createBoard(rows, columns) {
    const board = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push({
          isShip: false,
          ship: null,
          shipHit: false,
          isHit: false,
        });
      }
      board.push(row);
    }

    return board;
  }

  placeShip(length, orientation, [row, column]) {
    // Orientation is horizontal or vertical
    // 0 = horizontal
    // 1 = vertical
    if (this.#isValidPlacement(length, orientation, [row, column])) {
      const ship = new Ship(length);

      if (orientation === 0) {
        for (let i = column; i < column + length; i++) {
          this.board[row][i] = { isShip: true, ship: ship, shipHit: false, isHit: false };
        }
      } else {
        for (let i = row; i < row + length; i++) {
          this.board[i][column] = { isShip: true, ship: ship, shipHit: false, isHit: false };
        }
      }

      // Successfully placed.
      return true;
    }

    // Failed to place.
    return false;
  }

  #isValidPlacement(length, orientation, [xStart, yStart]) {
    // Orientation = 0 (horizontal)
    if (orientation === 0) {
      for (let i = xStart; i < xStart + length; i++) {
        // Out of bounds check
        if (!this.#isInBound(i, yStart)) {
          return false;
        }

        // Check if ship already occupying space
        if (this.board[xStart][i].isShip) {
          return false;
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

  receiveAttack([row, column]) {
    const cell = this.board[row][column];

    if (cell.isHit) {
      // Cell is already hit. Do not change anything
      return false;
    }

    cell.isHit = true;
    if (cell.isShip) {
      cell.ship.hit();
      cell.shipHit = true;
    }

    return true;
  }
}

export { Gameboard };
