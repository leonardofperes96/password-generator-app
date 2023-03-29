import React from "react";
import styles from "./GeneratedPassword.module.css";
import { FaCopy } from "react-icons/fa";
import {BsArrowCounterclockwise} from 'react-icons/bs'
const GeneratedPassword = () => {
  return (
    <div className={styles.password_container}>
      <h2 className={styles.password}>PasswordGerado</h2>
      <div className={styles.password_options}>
        <button>
          <FaCopy className={styles.button_icons} />
        </button>
        <button>
          <BsArrowCounterclockwise className={styles.button_icons} />
        </button>
      </div>
    </div>
  );
};

export default GeneratedPassword;
