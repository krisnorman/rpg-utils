import { Dice } from '../src/dice';

test("d0 tests", () => {
  let d0 = Dice.d0;
  expect(d0.name).toBe("none");
  expect(d0.sides).toBe(0);
  expect(d0.roll().Total).toBe(0);
});

test("d2 tests", () => {
  let d2 = Dice.d2;
  let roll = d2.roll();
  expect(d2.name).toBe("d2");
  expect(d2.sides).toBe(2);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(2);
});

test("d4 tests", () => {
  let d4 = Dice.d4;
  let roll = d4.roll();
  expect(d4.name).toBe("d4");
  expect(d4.sides).toBe(4);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(4);
});

test("d6 tests", () => {
  let d6 = Dice.d6;
  let roll = d6.roll();
  expect(d6.name).toBe("d6");
  expect(d6.sides).toBe(6);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(6);
});

test("d8 tests", () => {
  let d8 = Dice.d8;
  let roll = d8.roll();
  expect(d8.name).toBe("d8");
  expect(d8.sides).toBe(8);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(8);
});

test("d10 tests", () => {
  let d10 = Dice.d10;
  let roll = d10.roll();
  expect(d10.name).toBe("d10");
  expect(d10.sides).toBe(10);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(10);
});

test("d12 tests", () => {
  let d12 = Dice.d12;
  let roll = d12.roll();
  expect(d12.name).toBe("d12");
  expect(d12.sides).toBe(12);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(12);
});

test("d20 tests", () => {
  let d20 = Dice.d20;
  let roll = d20.roll();
  expect(d20.name).toBe("d20");
  expect(d20.sides).toBe(20);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(20);
});

test("d30 tests", () => {
  let d30 = Dice.d30;
  let roll = d30.roll();
  expect(d30.name).toBe("d30");
  expect(d30.sides).toBe(30);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(30);
});

test("d100 tests", () => {
  let d100 = Dice.d100;
  let roll = d100.roll();
  expect(d100.name).toBe("d100");
  expect(d100.sides).toBe(100);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(100);
});

test("Create tests", () => {
  let name = "d60";
  let sides = 60;
  let d60 = Dice.create(name, sides);
  let roll = d60.roll();
  expect(d60.name).toBe(name);
  expect(d60.sides).toBe(sides);
  expect(roll.Total).toBeGreaterThanOrEqual(1);
  expect(roll.Total).toBeLessThanOrEqual(60);
});