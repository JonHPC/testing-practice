const capitalize = require('../functions/capitalize');

test("Capitalize first letter of 'latte'", () => {
    expect(capitalize("latte")).toBe("Latte");
});

test("Capitalize first letter of 'BOBA'", () => {
    expect(capitalize("BOBA")).toBe("BOBA");
});

test("Attempt to capitalize a number", () => {
    expect(capitalize("123")).toBe("123");
});

test("Attempt to capitalize a special character", () => {
    expect(capitalize("???")).toBe("???");
});

test("Capitalize first letter of 'latte.mk3'", () => {
    expect(capitalize("latte.mk3")).toBe("Latte.mk3");
});