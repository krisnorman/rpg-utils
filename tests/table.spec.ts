import { Table, IRow, IRowResult } from "../src";

const data: IRow[] = [];

test("Getting a row with a single number", () => {
  let value = "Rolled a 1";
  data.push({ Roll: 1, Value: value });

  let sut = new Table(data);

  let result = sut.find(1);

  expect(result.Row.Value).toBe(value);
});

test("Getting a row with an array of numbers", () => {
    let value = "Rolled a 3 or 4";
    data.push(
        { Roll: 1, Value: "1" },
        { Roll: 2, Value: "2" },
        { Roll: [3,4], Value: value },
        { Roll: [5,6], Value: "5,6" }
    );
  
    let sut = new Table(data);
  
    let result = sut.find(3);
  
    expect(result.Row.Value).toBe(value);
  });

  test("Table is simple array of strings", () => {    
    let simpleData = ["simple row"];
  
    let sut = new Table(simpleData);
  
    let result = sut.find(1);
  
    expect(result.Row.Value).toBe("simple row");
  });

  test("Roll is less than one", () => {    
    let table = new Table(data);    
    let sut = () => table.find(0);
    expect(() => sut()).toThrow("Roll must be greater than zero.");
  });
