function createBoard(gameBoard, boardContainer) {
  const nRows = gameBoard.board.length;
  const nColumns = gameBoard.board[0].length;

  for (let row = 0; row < nRows; row++) {
    const rowCells = document.createElement("div");

    for (let column = 0; column < nColumns; column++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.addEventListener("click", () => {
        if (gameBoard.receiveAttack([row, column])) {
          cell.classList.add("hit");

          if (gameBoard.board[row][column].isShip) {
            cell.classList.add("ship-hit");
          }
        }
      });
      rowCells.appendChild(cell);
    }
    boardContainer.appendChild(rowCells);
  }
}

export { createBoard };
