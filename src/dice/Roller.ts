export class Roller {
  static roll(sides: number, times: number = 1): RollResult {
    if (sides < 1) throw new Error("Sides must be greater than zero.");
    
    if (times <= 1) {
      let rolls = [Roller._roll(sides)];
      return {Sides: sides, Rolls: rolls, Times: 1, Total: rolls[0] }
    }

    let result = 0;

    let rolls: number[] = [];
    for (let index = 0; index < times; index++) {
      let currentResult = Roller._roll(sides);
      rolls[index] = currentResult;
      result = result + currentResult;
    }

    return {Sides: sides, Rolls: rolls, Times: times, Total: result};
  }

  private static _roll(sides: number) {
    return Math.floor(Math.random() * (sides - 1 + 1) + 1);
  }
}

export type RollResult = {
  Sides: number;
  Times: number;
  Rolls: number[];
  Total: number;
}