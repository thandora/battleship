class Dom {
  renderBoards(players) {
    const boardNodes = document.querySelectorAll(".board");

    for (const i in players) {
      const boardNode = boardNodes[i];
      const nRows = players[i].gameBoard.board.length;
      const nColumns = players[i].gameBoard.board[0].length;
      this.createBoard([nRows, nColumns], boardNode);
    }
  }

  createBoard([rows, columns], boardNode) {
    for (let row = 0; row < rows; row++) {
      const rowCells = document.createElement("div");

      for (let column = 0; column < columns; column++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        rowCells.appendChild(cell);
      }
      boardNode.appendChild(rowCells);
    }
  }

  assignHitClass([row, column], cell, gameBoard) {
    if (gameBoard.receiveAttack([row, column])) {
      cell.classList.add("hit");

      if (gameBoard.board[row][column].isShip) {
        cell.classList.add("ship-hit");
      }
    }
  }
}

export { Dom };
