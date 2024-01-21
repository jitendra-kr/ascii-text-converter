export const textToASCII = (text: string) => {
  const asciiArray = [];

  for (let i = 0; i < text.length; i++) {
    const asciiValue = text.charCodeAt(i);
    asciiArray.push(asciiValue);
  }

  return asciiArray;
};
