const { inchesToCm } = require("../src/inches-to-cm.js");

describe("inchesToCm", () => {
    it("should convert inches to cm", () => {
        expect(inchesToCm(1)).toBe(2.54);
        expect(inchesToCm(2)).toBe(5.08);
        expect(inchesToCm(4)).toBe(10.16);

    })
})