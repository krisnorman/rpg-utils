import { DefaultOptions, IRoller, IRollOptions, Roller } from "../src/dice";
import { IRandom } from "../src/Random";
import { MockRandom } from "./mocks/MockRandom";

const TestValues = {
  Expect1: {Value: 0, Result: 1}
}

test("Roller test - Single roll", () => {
  let valueToReturn: number = TestValues.Expect1.Value;
  const mockRandom: IRandom = new MockRandom(valueToReturn);
  const options: IRollOptions = new DefaultOptions();  
  const sut: IRoller = new Roller(mockRandom);

  let result = sut.roll(options);
  expect(result.GrandTotal).toBe(TestValues.Expect1.Result);
});

test("Roller test - Three rolls", () => {
  let valueToReturn: number = TestValues.Expect1.Value;
  const mockRandom: IRandom = new MockRandom(valueToReturn);
  const options: IRollOptions = new DefaultOptions();  
  options.Times = 3;
  const sut: IRoller = new Roller(mockRandom);

  let result = sut.roll(options);
  expect(result.GrandTotal).toBe(3);
});
