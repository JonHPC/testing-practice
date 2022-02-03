const analyzeArray = require("../functions/analyzeArray");

test("Check average value", () => {
    expect(analyzeArray([1,2,3,4,5]).average).toBe(3);
});

test("Check min value", () => {
    expect(analyzeArray([1,2,3,4,5]).min).toBe(1);
});

test("Check max value", () => {
    expect(analyzeArray([1,2,3,4,5]).max).toBe(5);
});

test("Check length of array", () => {
    expect(analyzeArray([1,2,3,4,5]).length).toBe(5);
});

test("Check if entire object is returned", () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});