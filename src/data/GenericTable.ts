import { IRow } from "./index.js";
import { IGenericRowResult } from "./IGenericRowResult.js";
import { findMissingNumbers } from "../utils/findMissing.js";
import { findDuplicates } from "../utils/findDuplicates.js";
import { TableValidationResult } from "./TableValidationResult.js";

export class GenericTable<T extends IRow> {
  constructor(private tableData: T[], public dieExpression?: string) {
    this.rollArray = this.createRollArray();

    if (dieExpression === undefined) {
      // First validate the table.
      const validationResult = this.validateTable();
      if (!validationResult.isValid)
        throw new Error(
          `The table data is invalid. Missing numbers: ${validationResult.missingRollNumbers}. ` +
            `Duplicate numbers: ${validationResult.duplicateRollNumbers}. ` +
            `When the 'dieExpression' argument is not included, the expression is calculated by ` +
            `validating the table contains roll values from the minimum to the maximum with no duplicates or missing values.`
        );

      const min = Math.min(...this.rollArray);
      const max = Math.max(...this.rollArray);
      dieExpression = `${min}d${max}`;
    }
  }

  private rollArray: number[];

  protected validateTable(): TableValidationResult {
    const missing = this.getMissingRows(this.rollArray);
    const duplicates = findDuplicates(this.rollArray);
    const result: TableValidationResult = {
      isValid: missing.length === 0 && duplicates.length === 0,
      missingRollNumbers: missing,
      duplicateRollNumbers: duplicates,
    };

    return result;
  }

  private createRollArray(): number[] {
    let tmp: number[] = [];
    this.tableData.forEach((x) => {
      if (Array.isArray(x.Roll)) {
        tmp.push(x.Roll[0]);
        tmp.push(x.Roll[1]);
        const missing = findMissingNumbers(x.Roll);
        missing.forEach((m) => {
          tmp.push(m);
        });
      } else {
        tmp.push(x.Roll);
      }
    });

    return tmp;
  }

  private getMissingRows(arr: number[]): number[] {
    const missing = findMissingNumbers(arr);
    return missing;
  }

  get rows(): T[] {
    return this.tableData;
  }

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
