import { Gameboard } from "../class/gameboard";
import { Ship } from "../class/ship";

// Test for Gameboard.board validity
describe("board (rows x columns)", () => {
  const cell = { ship: null, isShip: false, isHit: false };

  test("0 x 0 board", () => {
    const gameboard = new Gameboard(0, 0);
    const testBoard = [];

    expect(gameboard.board).toEqual(testBoard);
  });

  test("1 x 1 board", () => {
    const gameboard = new Gameboard(1, 1);
    const testBoard = [[cell]];

    expect(gameboard.board).toEqual(testBoard);
  });

  test("2 x 3 board", () => {
    const gameboard = new Gameboard(2, 3);
    const testBoard = [
      [cell, cell, cell],
      [cell, cell, cell],
    ];

    expect(gameboard.board).toEqual(testBoard);
  });
});

// Test for Gameboard.placeShip() on valid placements
describe("place ship at valid positions in 10 x 10 board. ", () => {
  let gameboard;
  let testBoard;

  beforeEach(() => {
    testBoard = new Gameboard(10, 10).board;
    gameboard = new Gameboard(10, 10);
  });

  // Coordinates state the starting cell of the ship.
  test("horizontal ship of length 4 at (0, 0)", () => {
    const ship = new Ship(4);
    gameboard.placeShip(4, 0, [0, 0]);

    for (let i = 0; i < 4; i++) {
      testBoard[0][i] = { isShip: true, ship: ship, isHit: false };
    }

    expect(gameboard.board).toEqual(testBoard);
  });

  test("vertical ship of length 4 at (0, 0)", () => {
    const ship = new Ship(4);
    gameboard.placeShip(4, 1, [0, 0]);

    for (let i = 0; i < 4; i++) {
      testBoard[i][0] = { isShip: true, ship: ship, isHit: false };
    }

    expect(gameboard.board).toEqual(testBoard);
  });

  test("horizontal ship of length 4 at (3, 5)", () => {
    const ship = new Ship(4);
    gameboard.placeShip(4, 0, [3, 5]);

    for (let i = 5; i < 9; i++) {
      testBoard[3][i] = { isShip: true, ship: ship, isHit: false };
    }
    expect(gameboard.board).toEqual(testBoard);
  });
});

// Test for Gameboard.placeShip() on invalid placements
describe("place ships at an invalid positions in 10 x 10 board.", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard(10, 10);
  });

  test("horizontal ship of length 4 at (8, 0)", () => {
    expect(gameboard.placeShip(4, 0, [8, 0])).toBeFalsy();
  });

  test("vertical ship of length 4 at (3, 9)", () => {
    expect(gameboard.placeShip(4, 1, [3, 9])).toBeFalsy();
  });

  test("placing ship of length 2 on already occupied space", () => {
    const cell = { ship: null, isShip: true, isHit: false };
    gameboard.board[0][0] = cell;
    gameboard.board[0][1] = cell;

    expect(gameboard.placeShip(2, 0, [0, 0])).toBeFalsy();
  });
});
