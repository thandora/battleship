import { Gameboard } from "./class/gameboard";
import { Computer, Player } from "./class/player";
import { Dom } from "./dom";
import "./style.css";

const boardA = new Gameboard(10, 10);
const boardB = new Gameboard(10, 10);
const playerA = new Player("Jhon Dog", boardA, true);
const computer = new Computer("Jhon Dog", boardB, false);
const players = [playerA, computer];
const dom = new Dom();
boardA.placeShip(5, 0, [0, 0]);
boardA.placeShip(5, 0, [1, 0]);

boardB.placeShip(3, 0, [0, 0]);
boardB.placeShip(3, 0, [2, 0]);
dom.renderBoards(players);

function attachCellHandler(boardContainer) {
  const cells = boardContainer.querySelectorAll(".cell");

  for (const cellNode of cells) {
    const row = +cellNode.getAttribute("data-row");
    const column = +cellNode.getAttribute("data-column");

    // Game logic. It is inside each cell. Can't figure out how to implement
    // the logic outside the cell.
    cellNode.addEventListener("click", () => {
      if (!playerA.gameBoard.allSunk() && !computer.gameBoard.allSunk()) {
        if (playerA.isTurn) {
          playerA.attack([row, column], computer.gameBoard);

          if (!computer.gameBoard.board[row][column].isShip) {
            playerA.isTurn = false;
            computer.isTurn = true;
          }
        }

        do {
          if (computer.isTurn) {
            const coords = computer.getRandomCoordinates(playerA.gameBoard);
            const row = coords[0];
            const column = coords[1];

            computer.attack(coords, playerA.gameBoard);
            const cellNode = document.querySelector(
              `.board-a [data-row="${row}"][data-column="${column}"]`
            );

            const cell = playerA.gameBoard.board[row][column];

            dom.assignHitClass(cellNode, cell);
            if (!cell.isShip) {
              computer.isTurn = false;
              playerA.isTurn = true;
            }
          }
        } while (computer.isTurn);

        dom.renderBoards();
      }

      dom.assignHitClass(cellNode, computer.gameBoard.board[row][column]);

      if (playerA.gameBoard.allSunk()) {
        document.querySelector(".name-b").classList.add("winner");
      }

      if (computer.gameBoard.allSunk()) {
        document.querySelector(".name-a").classList.add("winner");
      }
    });
  }
}

// TODO debug tests
document.querySelector(".test").addEventListener("click", () => {
  console.log(boardA.board);
  console.log(boardB.board);
});

attachCellHandler(document.querySelector(".board-b"));
