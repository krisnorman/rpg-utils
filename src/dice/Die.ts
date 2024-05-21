import { Random } from "../Random";
import { DefaultOptions, Roller } from "./Roller";

export class Die {
  constructor(public name: string, public sides: number) {}

  roll(times: number = 1) {
    let roller = new Roller(new Random());
    let options = new DefaultOptions();
    options.Sides = this.sides;
    options.Times = times;
    return roller.roll(options);
  }
}

