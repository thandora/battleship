class Player {
  constructor(name, gameBoard) {
    this.name = name;
    this.gameBoard = gameBoard;
  }

  attack([row, column], gameBoard) {
    return gameBoard.receiveAttack([row, column]);
  }
}

class Computer extends Player {
  constructor(name, gameBoard) {
    super(name, gameBoard);
  }

  attackRandom(gameBoard) {
    const randCoordinates = this.#getRandomCoordinates(gameBoard);

    return this.attack(randCoordinates, gameBoard);
  }

  #getRandomCoordinates(gameBoard) {
    // Makes an array of available coordinates and pick a random one.
    const unhitCellsCoordinates = [];
    const board = gameBoard.board;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        const c = board[i][j];
        if (c.isHit === false) {
          unhitCellsCoordinates.push([i, j]);
        }
      }
    }
    const n = Math.floor(Math.random() * unhitCellsCoordinates.length);
    return unhitCellsCoordinates[n];
  }
}

export { Player, Computer };
