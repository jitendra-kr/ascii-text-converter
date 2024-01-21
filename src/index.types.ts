export type AsciiToTextType = "decimal" | "binary" | "octal" | "hex";

export type AsciiInputText = string | number | undefined | null

export type AsciiToTextOptions = {
  type?: AsciiToTextType;
}
