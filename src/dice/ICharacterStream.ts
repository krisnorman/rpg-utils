
export interface ICharacterStream {
  getCurrentCharacter(): string;
  getCurrentPosition(): number;
  getNextCharacter(): string;
  peekNextCharacter(): string;
}
