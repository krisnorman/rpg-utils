import { IRow } from "./index.js";
import { IGenericRowResult } from "./IGenericRowResult.js";

export class GenericTable<T extends IRow> {
  constructor(private tableData: T[]) {}

  find(roll: number): IGenericRowResult<T> {    
    if (roll < 1) throw new Error("Roll must be greater than zero.");

    let result = roll;

    let matchedRow = this.tableData.find((r) =>
      this.findMatchingRow(r as T, result)
    );

    const index = this.tableData.findIndex(
      (x) => x.Value === matchedRow?.Value
    );

    return {
      Row: matchedRow as T,
      ActualRoll: result,
      Index: index,
    };
  }

  private findMatchingRow(row: T, result: number): boolean {
    if (Array.isArray(row.Roll)) {
      let isGreaterThanMin = row.Roll[0] <= result;
      let isLessThanMax = row.Roll[1] >= result;
      return isGreaterThanMin && isLessThanMax;
    } else {
      let isEqual = row.Roll === result;
      return isEqual;
    }
  }

  getRowByIndex(index: number): T {
    return this.tableData[index];
  }
}
