import { IRandom } from "../../src/Random";

export class MockRandom implements IRandom {
  constructor(private valueToReturn: number) {}

  mathRandom(): number {
    return this.valueToReturn;
  }

  random(): number {
    return this.valueToReturn;
  }
}
