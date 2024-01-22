import { AsciiInputText, AsciiToTextOptions } from "../types/types";
import { asciiToTextFn } from "../utils";

export function asciiToText(
  text: AsciiInputText,
  options?: AsciiToTextOptions
): string {
  if (!text) {
    return "";
  }
  text = text + "";
  if (options?.type) {
    return asciiToTextFn[options.type](text);
  }
  return asciiToTextFn["decimal"](text);
}
