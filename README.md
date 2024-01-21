# ASCII-Text Converter

## Description
ASCII-Text Converter is a simple, yet powerful npm package that allows you to convert ASCII to text and text to ASCII codes. This package is designed to be easy to use, efficient, and versatile, making it an excellent choice for projects that require ASCII-text conversions.

Demo

[ASCII to Text converter](https://www.fireboxtools.com/text-tools/ascii-to-string)

[Text to ASCII converter](https://www.fireboxtools.com/text-tools/string-to-ascii)

## Installation
To install the ASCII-Text Converter package, use the following command:


Using `npm`:
```bash
npm install ascii-text-converter
```

Using `yarn`:
```bash
yarn add ascii-text-converter
```

Using `pnpm`:
```bash
 pnpm add ascii-text-converter
```

## Usage
Once it is installed, you can use the library using `import` or `require` approach.

Here's how you can use the ASCII-Text Converter package in your code:

### Convert Text to ASCII
```js
import { textToAscii } from 'ascii-text-converter';

const text = 'Hello, World!';
const ascii = textToAscii(text);
console.log(ascii);
```

### Convert ASCII to Text
```js
import { asciiToText } from 'ascii-text-converter';

const ascii = '72 101 108 108 111 44 32 87 111 114 108 100 33';
const text = asciiToText(ascii);
console.log(text);
```

## Features
- Text to ASCII Conversion: This package can convert any text string into its corresponding ASCII code. This is helpful for text data encoding safely.
- ASCII to Text Conversion: This package can also convert ASCII codes back into their corresponding text strings. This is helpful for safely decoding ASCII-encoded data.
- Easy to use: The ASCII-Text Converter package is designed to be user-friendly and intuitive.
- Efficient: This package performs ASCII-text conversions quickly and efficiently.
- Versatile: Whether you need to convert ASCII to text or text to ASCII, this package has you covered.

## Browser Support
The ASCII-Text Converter package is compatible with the latest versions of the following browsers:



![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
 ✔ |  ✔ |  ✔ |  ✔ |  ✔ |  ✔ |

## Contributing
We welcome contributions from the community. 

## License
This project is licensed under the [MIT LICENSE](LICENSE).
