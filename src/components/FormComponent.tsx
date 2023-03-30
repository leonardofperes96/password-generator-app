import React from "react";
import styles from "./FormComponent.module.css";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

import { useGeneratePasswordContext } from "../contexts/generate_password_context";

const FormComponent = () => {
  const {
    isUppercase,
    isLowercase,
    isNumber,
    isSymbol,
    passwordLength,
    password,
    openModal,

    resetPassword,
    updatePasswordState,
  } = useGeneratePasswordContext();

  const handleCopy = () => {
    if (password.length === 0) {
      return;
    }
    navigator.clipboard.writeText(password);
    openModal();
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.form_content}>
        <h2>Personalize sua senha</h2>
        <hr />
        <form className={styles.form}>
          <div className={styles.form_range_container}>
            <label>Número de caracteres da senha</label>
            <div className={styles.form_range_content}>
              <p>{passwordLength}</p>
              <input
                type="range"
                min="1"
                max="30"
                name="passwordLength"
                value={passwordLength}
                onChange={updatePasswordState}
              />
            </div>
          </div>
          <div className={styles.form_checked_options_mobile}>
            <div className={styles.form_checked_content}>
              <input
                type="checkbox"
                name="isUppercase"
                checked={isUppercase}
                onChange={updatePasswordState}
              />
              <label htmlFor="">Letra maiúscula</label>
            </div>
            <div className={styles.form_checked_content}>
              <input
                type="checkbox"
                name="isLowercase"
                checked={isLowercase}
                onChange={updatePasswordState}
              />
              <label htmlFor="">Letra minuscula</label>
            </div>
            <div className={styles.form_checked_content}>
              <input
                type="checkbox"
                name="isNumber"
                checked={isNumber}
                onChange={updatePasswordState}
              />
              <label htmlFor="">Números</label>
            </div>
            <div className={styles.form_checked_content}>
              <input
                type="checkbox"
                name="isSymbol"
                checked={isSymbol}
                onChange={updatePasswordState}
              />
              <label htmlFor="">Símbolos</label>
            </div>
          </div>
          <div className={styles.form_checked_options_desktop}>
            <div className={styles.form_checked_content}>
              <label htmlFor="">Letra maiúscula</label>
              <input
                type="checkbox"
                name="isUppercase"
                checked={isUppercase}
                onChange={updatePasswordState}
              />
            </div>
            <div className={styles.form_checked_content}>
              <label htmlFor="">Letra minuscula</label>
              <input
                type="checkbox"
                name="isLowercase"
                checked={isLowercase}
                onChange={updatePasswordState}
              />
            </div>
            <div className={styles.form_checked_content}>
              <label htmlFor="">Números</label>
              <input
                type="checkbox"
                name="isNumber"
                checked={isNumber}
                onChange={updatePasswordState}
              />
            </div>
            <div className={styles.form_checked_content}>
              <label htmlFor="">Símbolos</label>
              <input
                type="checkbox"
                name="isSymbol"
                checked={isSymbol}
                onChange={updatePasswordState}
              />
            </div>
          </div>
        </form>
      </div>
      <Button onClick={handleCopy} id={styles.btn} variant="danger">
        Copiar Senha
        {/* modal onclick */}
      </Button>
      <Button id={styles.btn} onClick={resetPassword} variant="warning">
        Resetar paramêtros
      </Button>
    </div>
  );
};

export default FormComponent;
