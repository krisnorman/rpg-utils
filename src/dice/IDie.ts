export interface IDie {
  sides: number;
  roll(times?: number): number;
}
