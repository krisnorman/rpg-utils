import { Random } from "../Random";
import { DefaultOptions, IRoller, Roller } from "./Roller";

export class Die {
  constructor(
    public name: string,
    public sides: number,
    private roller: IRoller = new Roller(new Random())
  ) {}

  roll(times: number = 1) {
    let options = new DefaultOptions();
    options.Sides = this.sides;
    options.Times = times;
    return this.roller.roll(options);
  }
}
