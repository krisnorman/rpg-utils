import { IRandom } from "../Random";

export interface IRoller {
  roll(options: IRollOptions): IRollResult;
}

export interface IRollOptions {
  Sides: number;
  Times: number;
}

export class DefaultOptions implements IRollOptions {
  Sides: number = 2;
  Times: number = 1;
}

export interface IRollResult {
  Description: string;
  Options: IRollOptions;
  Results: IRoll[];
  GrandTotal: number;
}

export interface IRoll {    
  Total: number;
}

export class Roller implements IRoller {
  constructor(private random: IRandom) {}

  roll(options: IRollOptions): IRollResult {
    let times = options.Times;
    let sides = options.Sides;

    let rolls: IRoll[] = [];
    for (let index = 0; index < times; index++) {
      let result = this.rollDie(sides);
      rolls.push({Total: result});
    }
    let description = `${times}d${sides}`;
    let grandTotal = rolls.map(x=> x.Total).reduce((acc, curr) => acc + curr, 0);
    return { Description: description, Options: options, Results: rolls, GrandTotal: grandTotal };
  }

  private rollDie(sides: number): number {
    if (sides <= 0) return 0;
    return Math.floor(this.random.mathRandom() * (sides - 1 + 1) + 1);
  }
} 