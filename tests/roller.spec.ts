import { Roller } from '../src/dice';

test("Roller tests", () => {
    let sides = 6;
    let times = 2;

    let sut = Roller.roll(sides, times);
    let total = sut.Total;

    expect(sut.Expression).toBe("2d6");
    expect(sut.Rolls.length).toBe(2);
    expect(sut.Times).toBe(2);
    expect(total).toBeGreaterThanOrEqual(2);
    expect(total).toBeLessThanOrEqual(12);
  });

  test("Roller default values tests", () => {
    let sides = 6;   

    let sut = Roller.roll(sides);
    let total = sut.Total;

    expect(sut.Expression).toBe("1d6");
    expect(sut.Rolls.length).toBe(1);
    expect(sut.Times).toBe(1);
    expect(total).toBeGreaterThanOrEqual(1);
    expect(total).toBeLessThanOrEqual(6);
  });

  test("Roller when sides is less than zero, should throw an error", () => {
    expect(() => {Roller.roll(-6)}).toThrow();
  });