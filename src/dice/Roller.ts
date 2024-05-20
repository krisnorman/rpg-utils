export class Roller {
  static roll(sides: number, times: number = 1): RollResult {
    if (sides < 0) throw new Error("Sides must be zero or greater.");
    if (sides == 0) return new RollResult(0, 0, [0]);

    if (times <= 1) {
      let rolls = [Roller._roll(sides)];
      return new RollResult(sides, times, rolls);
    }

    let rolls: number[] = [];

    for (let index = 0; index < times; index++) {
      rolls.push(Roller._roll(sides));
    }

    return new RollResult(sides, times, rolls);
  }

  private static _roll(sides: number): number {
    return Math.floor(Math.random() * (sides - 1 + 1) + 1);
  }
}

export class RollResult {
  constructor(
    public Sides: number,
    public Times: number,
    public Rolls: number[]
  ) {}
  
  readonly Total: number = this.sum(this.Rolls);
  readonly Expression: string = `${this.Times}d${this.Sides}`;

  private sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}
