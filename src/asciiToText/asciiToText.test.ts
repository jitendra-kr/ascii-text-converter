import { describe, expect, it } from "vitest";
import { asciiToText } from "./asciiToText";

describe("asciiToText function", () => {
  it("Should converts a set of ASCII codes [decimal] to text", () => {
    const testData = [
      {
        text: "Hello",
        ascii: "72, 101, 108, 108, 111",
      },
      {
        text: "The quick brown fox jumps over the lazy dog 123!@#",
        ascii:
          "84 104 101 32 113 117 105 99 107 32 98 114 111 119 110 32 102 111 120 32 106 117 109 112 115 32 111 118 101 114 32 116 104 101 32 108 97 122 121 32 100 111 103 32 49 50 51 33 64 35",
      },
      {
        text: "Helo",
        ascii: "72 101 xyz 108 111",
      },
    ];
    for (let index = 0; index < testData.length; index++) {
      const element = testData[index];
      const result = asciiToText(element.ascii);
      expect(result).toEqual(element.text);
    }
  });

  it("Should converts a set of ASCII codes [binary] to text", () => {
    const testData = [
      {
        text: "Hello",
        ascii: "1001000 1100101 1101100 1101100 1101111",
      },
      {
        text: "Only robots speak binary!",
        ascii: "01001111 01101110 01101100 01111001 00100000 01110010 01101111 01100010 01101111 01110100 01110011 00100000 01110011 01110000 01100101 01100001 01101011 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100001",
      },
    ];
    for (let index = 0; index < testData.length; index++) {
      const element = testData[index];
      const result = asciiToText(element.ascii, { type: "binary" });
      expect(result).toEqual(element.text);
    }
  });

  it("Should converts a set of ASCII codes [octal] to text", () => {
    const testData = [
      {
        text: " fireboxtools.com",
        ascii: "40 146 151 162 145 142 157 170 164 157 157 154 163 56 143 157 155",
      },
    ];
    for (let index = 0; index < testData.length; index++) {
      const element = testData[index];
      const result = asciiToText(element.ascii, { type: "octal" });
      expect(result).toEqual(element.text);
    }
  });

  it("Should converts a set of ASCII codes [Hexadecimal] to text", () => {
    const testData = [
      {
        text: "fireboxtools.com",
        ascii: "66 69 72 65 62 6F 78 74 6F 6F 6C 73 2E 63 6F 6D",
      },
    ];
    for (let index = 0; index < testData.length; index++) {
      const element = testData[index];
      const result = asciiToText(element.ascii, { type: "hex" });
      expect(result).toEqual(element.text);
    }
  });
});
