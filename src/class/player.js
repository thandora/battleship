class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board;
  }

  attack([row, column], board) {
    return board.receiveAttack([row, column]);
  }
}

class Computer extends Player {
  constructor(name, board) {
    super(name, board);
  }

  attackRandom() {}

  #randomCoordinates() {
    const nRows = this.board.length;
    const row = Math.floor(Math.random() * nRows);

    const nColumns = this.board[0].length;
    const column = Math.floor(Math.random() * nColumns);

    return [row, column];
  }
}
