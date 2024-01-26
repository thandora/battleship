import { Ship } from "../class/ship";

describe("ship length", () => {
  test("test ship with length 0", () => {
    const ship = new Ship(0);
    expect(ship.length === 0);
  });

  test("ship with length 1", () => {
    const ship = new Ship(1);
    expect(ship.length === 1);
  });

  test("ship with length 5", () => {
    const ship = new Ship(5);
    expect(ship.length === 5);
  });
});

describe("hit() method", () => {
  test("ship hit 0 time", () => {
    const ship = new Ship(5);
    expect(ship.hitCount).toBe(0);
  });

  test("ship hit 1 time", () => {
    const ship = new Ship(5);
    ship.hit();
    expect(ship.hitCount).toBe(1);
  });

  test("ship hit <length - 1 times", () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hitCount).toBe(4);
  });
});
