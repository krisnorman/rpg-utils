import { IInterpreterError } from "./IInterpreterError.js";


export class DiceTsInterpreterError implements IInterpreterError {
  constructor(
    public message: string,
    //public expression: ExpressionNode,
    public stack?: string
  ) { }
}
