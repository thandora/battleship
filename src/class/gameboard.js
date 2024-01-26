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
}

export { Gameboard };
