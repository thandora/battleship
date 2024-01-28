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
          this.board[rStart][i] = { isShip: true, ship: ship, shipHit: false, isHit: false };
        }
      } else {
        for (let i = rStart; i < rStart + length; i++) {
          this.board[i][cStart] = { isShip: true, ship: ship, shipHit: false, isHit: false };
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
