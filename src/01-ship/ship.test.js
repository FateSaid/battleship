import { Ship } from "./ship.js";

describe("Ship", () => {
  const patrolShip = new Ship("Patrol Boat", 2);
  test("Should create a ship object", () => {
    expect(patrolShip).toBeDefined();
  });

  test("Should have name", () => {
    expect(patrolShip.name).toBe("Patrol Boat");
  });

  test("hit function should increase number of hits", () => {
    patrolShip.hit();
    expect(patrolShip.timesHit).toBe(1);
  });

  test("Should calculate whether ship is sunk", () => {
    patrolShip.hit();
    expect(patrolShip.isSunk()).toBeTruthy();
  });
});
