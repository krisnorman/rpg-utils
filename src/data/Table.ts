import { IRow } from "./IRow";
import { IRowResult } from "./IRowResult";

// Inspired by https://github.com/Dan503/random-tables-roller/tree/main
export class Table {
  constructor(private tableData: IRow[] | any[]) {}

  find(roll: number): IRowResult {
    //if (roll > this.tableData.length) throw new Error("Roll is out of index bounds.");
    if (roll < 1) throw new Error("Roll must be greater than zero.");

    let result = roll;

    if (this.isRowObject(this.tableData[0])) {
      let matchedRow = this.tableData.find((r) =>
        this.findMatchingRow(r as IRow, result)
      );

      return {
        Row: matchedRow as IRow,
        ActualRoll: result,
      };
    } else {
      let r = this.tableData[result - 1];
      return {
        Row: { Value: r, Roll: result },
        ActualRoll: result,
      };
    }
  }

  private isRowObject(row: IRow): boolean {
    return Object.keys(row || {}).includes("Roll");
  }

  private findMatchingRow(row: IRow, result: number): boolean {
    if (Array.isArray(row.Roll)) {
      let isGreaterThanMin = row.Roll[0] <= result;
      let isLessThanMax = row.Roll[1] >= result;
      return isGreaterThanMin && isLessThanMax;
    } else {
      let isEqual = row.Roll === result;
      return isEqual;
    }
  }
}
