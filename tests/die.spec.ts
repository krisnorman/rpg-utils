import { Die } from '../src/dice';

test("Die tests", () => {
  let name = "d6";
  let sides = 6;
  let sut = new Die(name, sides);
  let roll = sut.roll();

  expect(sut.sides).toBe(sides);
  expect(sut.name).toBe(name);
  expect(roll.GrandTotal).toBeGreaterThanOrEqual(1);
  expect(roll.GrandTotal).toBeLessThanOrEqual(6);
});