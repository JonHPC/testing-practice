const caesarCipher = require("../functions/caesarCipher");

test("Rot13 of 'Hello' should be 'URYYB'", () => {
    expect(caesarCipher("Hello", 13)).toBe("URYYB");
});

