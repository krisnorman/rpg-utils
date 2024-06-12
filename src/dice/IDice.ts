import { DiceResult } from "dice-typescript";
import { CharacterStream } from "dice-typescript/dist/lexer/character-stream.interface.js";

export interface IDice {
  roll(input: string | CharacterStream): DiceResult;
}
