const reverseString = require("../functions/reverseString");

test("Reverse the string 'Hello World'", () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("Reverse the string 'NANI??!1'", () => {
    expect(reverseString("NANI??!1")).toBe("1!??INAN");
});