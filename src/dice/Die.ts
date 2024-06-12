import { RpgRandom } from "../Random.js";
import { DefaultOptions, IRoller, Roller } from "./Roller.js";

export class Die {
  constructor(
    public name: string,
    public sides: number,
    private roller: IRoller = new Roller(new RpgRandom())
  ) {}

  roll(times: number = 1) {
    let options = new DefaultOptions();
    options.Sides = this.sides;
    options.Times = times;
    return this.roller.roll(options);
  }
}
