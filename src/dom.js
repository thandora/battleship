function createBoard(rows, columns, boardContainer) {
  for (let row = 0; row < rows; row++) {
    const rowCells = document.createElement("div");
    for (let column = 0; column < columns; column++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      rowCells.appendChild(cell);
    }
    boardContainer.appendChild(rowCells);
  }
}

export { createBoard };
