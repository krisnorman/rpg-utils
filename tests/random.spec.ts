import { Random } from "../src";

test("random() test", () => {
  let sut = new Random();
  let result = sut.random(1, 1);

  expect(result).toBe(1);
});

test("mathRandom() test", () => {
  let sut = new Random();
  let result = sut.mathRandom();

  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThanOrEqual(1);
});
