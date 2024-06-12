import { RpgRandom } from "../src";

test("random() test", () => {
  let sut = new RpgRandom();
  let result = sut.random(1, 1);

  expect(result).toBe(1);
});


