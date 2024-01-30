import { Gameboard } from "./class/gameboard";
import { createBoard } from "./dom";
import "./style.css";

const boardA = new Gameboard(10, 10);
const boardB = new Gameboard(10, 10);

boardA.placeShip(5, 1, [2, 3]);
createBoard(boardA, document.querySelector(".board-a"));
createBoard(boardB, document.querySelector(".board-b"));
