import { describe, expect, it } from "vitest";

import { textToAscii } from "./textToAscii";

describe("textToAscii function", () => {
  it("Should converts a string to ASCII", () => {
    const testData = [
      {
        text: "Hello",
        ascii: [72, 101, 108, 108, 111]
      },
      {
        text: "The quick brown fox jumps over the lazy dog 123!@#",
        ascii: [84, 104, 101, 32, 113, 117, 105, 99, 107, 32, 98, 114, 111, 119, 110, 32, 102, 111, 120, 32,
          106, 117, 109, 112, 115, 32, 111, 118, 101, 114, 32, 116, 104, 101, 32, 108, 97, 122, 121, 32,
          100, 111, 103, 32, 49, 50, 51, 33, 64, 35]
      }
    ];
    for (let index = 0; index < testData.length; index++) {
      const element = testData[index];
      const result = textToAscii(element.text);
      expect(result).toEqual(element.ascii);
      
    }
  });

  it("Should converts an empty string to an empty array", () => {
    const inputText = "";
    const result = textToAscii(inputText);
    expect(result).toEqual([]);
  });

  it("Converts a string with special characters to ASCII", () => {
    const inputText = "@#$%";
    const result = textToAscii(inputText);
    expect(result).toEqual([64, 35, 36, 37]);
  });
  it("Converts a string with special characters to ASCII", () => {
    const inputText = "@#$%";
    const result = textToAscii(inputText);
    expect(result).toEqual([64, 35, 36, 37]);
  });
});
