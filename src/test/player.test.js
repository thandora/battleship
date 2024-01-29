import { Gameboard } from "../class/gameboard";
import { Computer } from "../class/player";

describe("computer's .attackRandom()", () => {
  let computer;

  beforeEach(() => {
    const board = new Gameboard(10, 10);

    computer = new Computer("computer", board);
  });

  test("attack random cell 100 times (n of cells)", () => {
    for (let i = 0; i < 100; i++) {
      expect(computer.attackRandom()).toBeTruthy();
    }
  });
});
