import { describe, expect, it } from "vitest";

import { textToAscii } from "./textToAscii";

describe("textToAscii function", () => {
  it("Should converts a text to ASCII", () => {
    const testData = [
      {
        text: "Hello",
        ascii: [72, 101, 108, 108, 111],
      },
      {
        text: "The quick brown fox jumps over the lazy dog 123!@#",
        ascii: [
          84, 104, 101, 32, 113, 117, 105, 99, 107, 32, 98, 114, 111, 119, 110,
          32, 102, 111, 120, 32, 106, 117, 109, 112, 115, 32, 111, 118, 101,
          114, 32, 116, 104, 101, 32, 108, 97, 122, 121, 32, 100, 111, 103, 32,
          49, 50, 51, 33, 64, 35,
        ],
      },
      {
        text: "",
        ascii: [],
      },
      {
        text: "@#$%",
        ascii: [64, 35, 36, 37],
      },
      {
        text: "If the path is beautiful, let us not ask where it leads.",
        ascii: [
          73, 102, 32, 116, 104, 101, 32, 112, 97, 116, 104, 32, 105, 115, 32,
          98, 101, 97, 117, 116, 105, 102, 117, 108, 44, 32, 108, 101, 116, 32,
          117, 115, 32, 110, 111, 116, 32, 97, 115, 107, 32, 119, 104, 101, 114,
          101, 32, 105, 116, 32, 108, 101, 97, 100, 115, 46,
        ],
      },
      {
        text: "If you’re always trying to be normal, you will never know how amazing you can be.",
        ascii: [
          73, 102, 32, 121, 111, 117, 8217, 114, 101, 32, 97, 108, 119, 97, 121,
          115, 32, 116, 114, 121, 105, 110, 103, 32, 116, 111, 32, 98, 101, 32,
          110, 111, 114, 109, 97, 108, 44, 32, 121, 111, 117, 32, 119, 105, 108,
          108, 32, 110, 101, 118, 101, 114, 32, 107, 110, 111, 119, 32, 104,
          111, 119, 32, 97, 109, 97, 122, 105, 110, 103, 32, 121, 111, 117, 32,
          99, 97, 110, 32, 98, 101, 46,
        ],
      },

      {
        text: "-=qwertyuiop[]asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:ZXCVBNM<>?",
        ascii: [
          45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97,
          115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98,
          110, 109, 44, 46, 47, 126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95,
          43, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124, 65, 83, 68,
          70, 71, 72, 74, 75, 76, 58, 90, 88, 67, 86, 66, 78, 77, 60, 62, 63,
        ],
      },
      {
        text: "1234567890",
        ascii: [49, 50, 51, 52, 53, 54, 55, 56, 57, 48],
      },
    ];
    for (let index = 0; index < testData.length; index++) {
      const element = testData[index];
      const result = textToAscii(element.text);
      expect(result).toEqual(element.ascii);
    }
  });
});
