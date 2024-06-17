import { CharacterStream } from "dice-typescript/dist/lexer/character-stream.interface.js";
import { ICharacterStream } from "./ICharacterStream.js";


export class DiceTsCharacterStream implements ICharacterStream {
  constructor(private characterStream: CharacterStream) { }

  getCurrentCharacter(): string {
    return this.characterStream.getCurrentCharacter();
  }
  getCurrentPosition(): number {
    return this.characterStream.getCurrentPosition();
  }
  getNextCharacter(): string {
    return this.characterStream.getNextCharacter();
  }
  peekNextCharacter(): string {
    return this.characterStream.peekNextCharacter();
  }

}
