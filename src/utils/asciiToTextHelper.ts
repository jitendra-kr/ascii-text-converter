import { AsciiToTextType } from "../types/types";

function decimalASCIIToText(ascii: string) {
  const asciiArray = ascii
    .split(" ")
    .map((code) => parseInt(code.trim(), 10))
    .filter((item) => !isNaN(item));

  const sentence = asciiArray
    .map((asciiValue) => String.fromCharCode(asciiValue))
    .join("");

  return sentence;
}

function binaryASCIIToText(ascii: string) {
  // Split the input into an array of binary strings
  var binaryArray = ascii.split(" ");

  // Convert each binary string to decimal ASCII and then to a character
  var text = binaryArray
    .map(function (binary) {
      // Convert binary to decimal ASCII
      var decimalASCII = parseInt(binary, 2);
      // Convert decimal ASCII to character
      return String.fromCharCode(decimalASCII);
    })
    .join("");

  return text;
}

function octalASCIIToText(ascii: string) {
  // Split the input into an array of octal strings
  var octalArray = ascii.split(" ");

  // Convert each octal string to decimal ASCII and then to a character
  var text = octalArray
    .map(function (octal) {
      // Convert octal to decimal ASCII
      var decimalASCII = parseInt(octal, 8);
      // Convert decimal ASCII to character
      return String.fromCharCode(decimalASCII);
    })
    .join("");

  return text;
}

function hexASCIIToText(ascii: string) {
  // Split the input into an array of hexadecimal strings
  var hexArray = ascii.split(" ");

  // Convert each hexadecimal string to decimal ASCII and then to a character
  var text = hexArray
    .map(function (hex) {
      // Convert hexadecimal to decimal ASCII
      var decimalASCII = parseInt(hex, 16);
      // Convert decimal ASCII to character
      return String.fromCharCode(decimalASCII);
    })
    .join("");

  return text;
}

export const asciiToTextFn: Record<AsciiToTextType, (ascii: string) => string> =
  {
    decimal: decimalASCIIToText,
    binary: binaryASCIIToText,
    octal: octalASCIIToText,
    hex: hexASCIIToText,
  };
