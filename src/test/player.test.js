import { Gameboard } from "../class/gameboard";
import { Computer } from "../class/player";

describe("computer's .attackRandom()", () => {
  let computer;
  let enemyGameBoard;

  beforeEach(() => {
    const gameBoard = new Gameboard(10, 10);
    enemyGameBoard = new Gameboard(10, 10);

    computer = new Computer("computer", gameBoard);
  });

  test("attack random cell 100 times (total number of cells)", () => {
    for (let i = 0; i < 100; i++) {
      expect(computer.attackRandom(enemyGameBoard)).toBeTruthy();
    }
  });
});
