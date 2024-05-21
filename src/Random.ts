export interface IRandom {
  mathRandom(): number;
  random(minimum: number, maximum: number): number;
}

export class Random implements IRandom {
  random(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
  mathRandom(): number {
    return Math.random();
  }
}
