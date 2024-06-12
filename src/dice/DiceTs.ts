import { Dice, DiceResult } from "dice-typescript";
import { CharacterStream } from "dice-typescript/dist/lexer";
import { IDice } from "./IDice.js";

/**
 * Wraps dice-typescript Dice object.
 */
export class DiceTs implements IDice {
  private readonly dice: Dice;
  constructor() {
    this.dice = new Dice();
  }

  /**
   * Roll the dice.
   *
   * @param string or CharacterStream. Dice roll input to parse.
   * @return Object that contains results of the dice roll.
   */
  roll(input: string | CharacterStream): DiceResult {
    return this.dice.roll(input);
  }
}
