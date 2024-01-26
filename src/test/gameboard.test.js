import { Gameboard } from "../class/gameboard";

describe("board (rows x columns)", () => {
  const cell = { isShip: false, isHit: false };

  test("0 x 0 board", () => {
    const gameboard = new Gameboard(0, 0);
    expect(gameboard.board).toEqual([]);
  });

  test("1 x 1 board", () => {
    const gameboard = new Gameboard(1, 1);
    const mockBoard = [[cell]];

    expect(gameboard.board).toEqual(mockBoard);
  });

  test("2 x 3 board", () => {
    const gameboard = new Gameboard(2, 3);
    const mockBoard = [
      [cell, cell, cell],
      [cell, cell, cell],
    ];

    expect(gameboard.board).toEqual(mockBoard);
  });
});
