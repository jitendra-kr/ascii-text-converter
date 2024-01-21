import { textToASCII } from "../utils/textToasciiHelper";

export function textToAscii(text: string): number[] {
    if (!text) {
      return [];
    }
    return textToASCII(text);
  }