import { DefaultOptions, IRoller, IRollOptions, IRollResult, Roller } from "./dice";
import { IRandom, Random } from "./Random";

let random: IRandom = new Random();
let roller: IRoller = new Roller(random);
let options: IRollOptions = new DefaultOptions();
options.Sides = 6;
options.Times = 3; 
let result: IRollResult = roller.roll(options);
console.log(result);