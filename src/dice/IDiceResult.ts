import { IInterpreterError } from "./IInterpreterError.js";

export interface IDiceResult {
  successes: number;
  failures: number;
  total: number;
  renderedExpression: string;
  errors: IInterpreterError[];
}
