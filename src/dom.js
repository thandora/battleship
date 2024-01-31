class Dom {
  renderBoards(players) {
    const boardNodes = document.querySelectorAll(".board");

    for (const i in players) {
      const boardNode = boardNodes[i];
      this.clearBoard(boardNode);

      const cPlayer = players[i];
      const nRows = cPlayer.gameBoard.board.length;
      const nColumns = cPlayer.gameBoard.board[0].length;

      this.createBoard([nRows, nColumns], boardNode, cPlayer.gameBoard.board);
    }
  }

  createBoard([rows, columns], boardNode, board) {
    for (let row = 0; row < rows; row++) {
      const rowCells = document.createElement("div");

      for (let column = 0; column < columns; column++) {
        const cellNode = document.createElement("div");
        const cell = board[row][column];
        cellNode.classList.add("cell");

        cellNode.setAttribute("data-row", row);
        cellNode.setAttribute("data-column", column);

        this.assignHitClass(cellNode, cell);
        rowCells.appendChild(cellNode);
      }
      boardNode.appendChild(rowCells);
    }
  }

  assignHitClass(cellNode, cell) {
    if (cell.isHit) {
      cellNode.classList.add("hit");

      if (cell.isShip) {
        cellNode.classList.add("ship-hit");
      }
    }
  }

  clearBoard(boardNode) {
    while (boardNode.firstChild) {
      boardNode.removeChild(boardNode.firstChild);
    }
  }
}

export { Dom };
