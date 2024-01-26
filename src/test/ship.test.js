import { Ship } from "../class/ship";

describe("ship length", () => {
  test("ship with length 0", () => {
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

describe("hit() method on ship of length 5", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(5);
  });

  test("ship not hit", () => {
    // const ship = new Ship(5);
    expect(ship.hitCount).toBe(0);
  });

  test("ship hit 1 time", () => {
    ship.hit();
    expect(ship.hitCount).toBe(1);
  });

  test("ship hit <length - 1> times", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hitCount).toBe(4);
  });

  test("ship hit <length> times", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hitCount).toBe(5);
  });
});

describe("isSunk() on ship of length 4", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(4);
  });

  test("ship not hit", () => {
    expect(ship.isSunk()).toBeFalsy();
  });

  test("ship hit 1 time", () => {
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
  });

  test("ship hit 3 times", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
  });

  test("ship hit <length> times", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
});
