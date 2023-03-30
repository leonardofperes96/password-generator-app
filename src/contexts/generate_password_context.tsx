import { useContext, createContext, useEffect, useReducer } from "react";
import { ActionTypes } from "../action-types/action-types";
import { generate_password_reducer as reducer } from "../reducers/generate_password_reducer";

export interface GeneratePasswordTypes {
  isUppercase: boolean;
  isLowercase: boolean;
  isNumber: boolean;
  isSymbol: boolean;
  passwordLength: number;
  characters: string;
  password: string;
  show: boolean;
  updatePasswordState: (e: any) => void;
  generatePassword: () => void;
  resetPassword: () => void;
  openModal: () => void;
  closeModal: () => void;
}

export const initialState = {
  isUppercase: false,
  isLowercase: false,
  isNumber: false,
  isSymbol: false,
  passwordLength: 1,
  characters: "",
  password: "",
  show: false,
  updatePasswordState: () => {},
  generatePassword: () => {},
  resetPassword: () => {},
  openModal: () => {},
  closeModal: () => {},
};

const GeneratePasswordContext =
  createContext<GeneratePasswordTypes>(initialState);

export const GeneratePasswordContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ActionTypes.UPDATE_CHARACTERS });
  }, [state.isLowercase, state.isUppercase, state.isNumber, state.isSymbol]);

  useEffect(() => {
    generatePassword();
  }, [
    state.isLowercase,
    state.isUppercase,
    state.isNumber,
    state.isSymbol,
    state.passwordLength,
  ]);

  const updatePasswordState = (e: any) => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "isUppercase") {
      value = e.target.checked;
    }
    if (name === "isLowercase") {
      value = e.target.checked;
    }
    if (name === "isNumber") {
      value = e.target.checked;
    }
    if (name === "isSymbol") {
      value = e.target.checked;
    }
    if (name === "passwordLength") {
      value = Number(e.target.value);
    }

    dispatch({
      type: ActionTypes.UPDATE_PASSWORDS_STATE,
      payload: { value, name },
    });
  };

  const resetPassword = () => {
    dispatch({ type: ActionTypes.CLEAR_PASSWORDS_STATE });
  };

  const generatePassword = () => {
    dispatch({ type: ActionTypes.GENERATE_PASSWORD });
  };

  const openModal = () => {
    dispatch({ type: ActionTypes.OPEN_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: ActionTypes.CLOSE_MODAL });
  };

  return (
    <GeneratePasswordContext.Provider
      value={{
        ...state,
        updatePasswordState,
        generatePassword,
        resetPassword,
        openModal,
        closeModal,
      }}
    >
      {children}
    </GeneratePasswordContext.Provider>
  );
};

export const useGeneratePasswordContext = () => {
  return useContext(GeneratePasswordContext);
};
