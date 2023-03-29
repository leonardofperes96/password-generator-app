let characters = "";

const setLowerCaseCharacters = (isLowerCase: boolean): string => {
  if (isLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  return "";
};

const setUpperCaseCharacters = (isUpperCase: boolean): string => {
  if (isUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return "";
};

const setNumbers = (isNumber: boolean): string => {
  if (isNumber) {
    characters += "0123456789";
  }

  return "";
};

const setSymbols = (isSymbol: boolean): string => {
  if (isSymbol) {
    characters += "!@#$%^&*()<>,.?/[]{}-=_+|/";
  }

  return "";
};

// const setLength = (passLength: number): number => {
//   passwordLength = passLength;

//   return passwordLength;
// };

const setRandomCharacters = (length: number): string => {
  let password = "";

  if (characters.length) {
    for (let i = length; i > 0; --i) {
      password += characters[Math.floor(Math.random() * characters.length)];
      return password;
    }
  }

  return password;
};

export { setRandomCharacters };

// function randomString(length: number, chars: string) {
//   var result = "";
//   for (var i = length; i > 0; --i)
//     result += chars[Math.floor(Math.random() * chars.length)];
//   return result;
// }
// var rString = randomString(
//   32,
//   "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// );
