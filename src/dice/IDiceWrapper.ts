import { DiceResult } from "dice-typescript";
import { CharacterStream } from "dice-typescript/dist/lexer";

export interface IDiceWrapper {
  roll(input: string | CharacterStream): DiceResult;
}
