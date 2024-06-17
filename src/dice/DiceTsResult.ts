import { DiceTsInterpreterError } from "./DiceTsInterpreterError.js";
import { IInterpreterError } from "./IInterpreterError.js";
import { IDiceResult } from "./IDiceResult.js";


export class DiceTsResult implements IDiceResult {
  constructor(
    public successes: number,
    public failures: number,
    public total: number,
    public renderedExpression: string,
    errors: IInterpreterError[]
  ) {
    if (errors != undefined) {
      errors.forEach((x) => this.errors.push(new DiceTsInterpreterError(x.message, x.stack))
      );
    }
  }
  errors: IInterpreterError[] = [];
}
