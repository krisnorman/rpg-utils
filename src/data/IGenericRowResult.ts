import { IRow } from "./index.js";

export interface IGenericRowResult<T extends IRow> {
  ActualRoll: number;
  Row: T;
  Index: number;
}
