import { Die } from '../src/dice';

test("Die tests", () => {
  let name = "d6";
  let sides = 6;
  let sut = new Die(name, sides);
  let roll = sut.roll();

  expect(sut.sides).toBe(sides);
  expect(sut.name).toBe(name);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(6);
});