import { ActionTypes } from "../action-types/action-types";

interface UpdatePasswordState {
  type: ActionTypes.UPDATE_PASSWORDS_STATE;
  payload: { name: string; value: string };
}

interface UpdateCharacters {
  type: ActionTypes.UPDATE_CHARACTERS;
}

interface ClearPasswordsState {
  type: ActionTypes.CLEAR_PASSWORDS_STATE;
}

interface GeneratePassword {
  type: ActionTypes.GENERATE_PASSWORD;
}
interface OpenModal {
  type: ActionTypes.OPEN_MODAL;
}
interface CloseModal {
  type: ActionTypes.CLOSE_MODAL;
}

export type GeneratePasswordActionTypes =
  | UpdatePasswordState
  | UpdateCharacters
  | ClearPasswordsState
  | GeneratePassword
  | OpenModal
  | CloseModal;
