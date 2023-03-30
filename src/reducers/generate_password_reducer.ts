import { ActionTypes } from "../action-types/action-types";
import { GeneratePasswordTypes } from "../contexts/generate_password_context";
import { initialState } from "../contexts/generate_password_context";
import { GeneratePasswordActionTypes } from "../action-creator/generate_password_actions";

const generate_password_reducer = (
  state: GeneratePasswordTypes = initialState,
  action: GeneratePasswordActionTypes
): GeneratePasswordTypes => {
  switch (action.type) {
    case ActionTypes.UPDATE_PASSWORDS_STATE:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case ActionTypes.UPDATE_CHARACTERS:
      const { isUppercase, isLowercase, isNumber, isSymbol } = state;
      let tempCharacters = "";

      if (isUppercase) {
        tempCharacters += "abcdefghijklmnopqrstuvwxyz";
      } else {
        tempCharacters += "";
      }
      if (isLowercase) {
        tempCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } else {
        tempCharacters += "";
      }
      if (isNumber) {
        tempCharacters += "0123456789";
      } else {
        tempCharacters += "";
      }
      if (isSymbol) {
        tempCharacters += "!@#$%^&*()<>,.?/[]{}-=_+|/";
      } else {
        tempCharacters += "";
      }

      return { ...state, characters: tempCharacters };
    case ActionTypes.CLEAR_PASSWORDS_STATE:
      return {
        ...state,
        isLowercase: false,
        isUppercase: false,
        isNumber: false,
        isSymbol: false,
        characters: "",
        passwordLength: 1,
      };

    case ActionTypes.GENERATE_PASSWORD:
      const { passwordLength, characters } = state;
      let tempPassword = "";
      const charactersLength = characters.length;
      let counter = 0;

      while (counter < passwordLength) {
        tempPassword += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }

      return { ...state, password: tempPassword };
    case ActionTypes.OPEN_MODAL:
      return { ...state, show: true };

    case ActionTypes.CLOSE_MODAL:
      return { ...state, show: false };
    default:
      return state;
  }
};

export { generate_password_reducer };
// const setRandomCharacters = (length: number): string => {
//   let password = "";

//   if (characters.length) {
//     for (let i = length; i > 0; --i) {
//       password += characters[Math.floor(Math.random() * characters.length)];
//       return password;
//     }
//   }

//   return password;
// };
