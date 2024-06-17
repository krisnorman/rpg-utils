import { ICharacterStream } from "./ICharacterStream.js";
import { IDiceResult } from "./IDiceResult.js";

export interface IDice {
  roll(input: string | ICharacterStream): IDiceResult;
}
