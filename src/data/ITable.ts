import { IRow } from "./IRow.js";
import { IRowResult } from "./IRowResult.js";

export interface ITable {
  find(roll: number): IRowResult;
  getRowByIndex(index: number): IRow;
}
