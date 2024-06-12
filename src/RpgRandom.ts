import { Random as RandomJs, integer, MersenneTwister19937 } from "random-js";
import { IRandom } from "./IRandom.js";

/**
 * Wraps random-js functionality.
 */
export class RpgRandom implements IRandom {
  random(minimum: number, maximum: number): number {
    const engine = MersenneTwister19937.autoSeed();
    const distribution = integer(minimum, maximum);
    return distribution(engine);
  }
  integer(): number {
    const random = new RandomJs();
    return random.int32();
  }
}
