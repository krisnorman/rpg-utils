import { Dice } from "dice-typescript";
import { IDice } from "./IDice.js";
import { ICharacterStream } from "./ICharacterStream.js";
import { IDiceResult } from "./IDiceResult.js";
import { DiceTsResult } from "./DiceTsResult.js";

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
  roll(input: string | ICharacterStream): IDiceResult {    
    const roll = this.dice.roll(input);
    const obj = new DiceTsResult(
      roll.successes,
      roll.failures,
      roll.total,
      roll.renderedExpression,
      roll.errors
    );
    return obj;
  }
}

