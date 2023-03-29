import React, { useState } from "react";
import styles from "./FormComponent.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormComponent = () => {

  return (
    <div className={styles.form_container}>
      <div className={styles.form_content}>
        <h2>Personalize sua senha</h2>
        <hr />
        <form className={styles.form}>
          <div className={styles.form_range_container}>
            <label>Número de caracteres da senha</label>
            <div className={styles.form_range_content}>
              <p>15</p>
              <input type="range" min="0" max="50" />
            </div>
          </div>
          <div className={styles.form_checked_options_mobile}>
            <div className={styles.form_checked_content}>
              <input type="checkbox" />
              <label htmlFor="">Letra maiúscula</label>
            </div>
            <div className={styles.form_checked_content}>
              <input type="checkbox" />
              <label htmlFor="">Letra minuscula</label>
            </div>
            <div className={styles.form_checked_content}>
              <input type="checkbox" />
              <label htmlFor="">Números</label>
            </div>
            <div className={styles.form_checked_content}>
              <input type="checkbox" />
              <label htmlFor="">Símbolos</label>
            </div>
          </div>
          <div className={styles.form_checked_options_desktop}>
            <div className={styles.form_checked_content}>
              <label htmlFor="">Letra maiúscula</label>
              <input type="checkbox" />
            </div>
            <div className={styles.form_checked_content}>
              <label htmlFor="">Letra minuscula</label>
              <input type="checkbox" />
            </div>
            <div className={styles.form_checked_content}>
              <label htmlFor="">Números</label>
              <input type="checkbox" />
            </div>
            <div className={styles.form_checked_content}>
              <label htmlFor="">Símbolos</label>
              <input type="checkbox" />
            </div>
          </div>
        </form>
      </div>
      <button>Copiar senha</button>
    </div>
  );
};

export default FormComponent;
