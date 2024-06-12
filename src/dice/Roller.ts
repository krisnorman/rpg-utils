import { IRandom } from "../Random.js";

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
    const times = options.Times;
    const sides = options.Sides;

    const rolls: IRoll[] = [];
    for (let index = 0; index < times; index++) {
      const result = this.rollDie(sides);
      rolls.push({ Total: result });
    }
    const description = `${times}d${sides}`;
    const grandTotal = rolls
      .map((x) => x.Total)
      .reduce((acc, curr) => acc + curr, 0);
    return {
      Description: description,
      Options: options,
      Results: rolls,
      GrandTotal: grandTotal,
    };
  }

  private rollDie(sides: number): number {
    if (sides <= 0) return 0;
    return this.random.random(1, sides);
  }
}
