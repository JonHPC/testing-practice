const calculator = require("../functions/calculator");

test("Return the sum of 1+2", () => {
    expect(calculator.add(1,2)).toBe(3);
});

test("Return the difference of 54-20", () => {
    expect(calculator.subtract(54,20)).toBe(34);
});

test("Return the product of 12*11", () => {
    expect(calculator.multiply(12,11)).toBe(132);
});

test("Return the quotient of 60/5", () => {
    expect(calculator.divide(60,5)).toBe(12);
});
