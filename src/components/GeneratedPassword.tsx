import React, { useEffect, useState } from "react";
import styles from "./GeneratedPassword.module.css";
import { FaCopy } from "react-icons/fa";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { useGeneratePasswordContext } from "../contexts/generate_password_context";
const GeneratedPassword = () => {
  const { passwordLength, generatePassword, password, openModal } =
    useGeneratePasswordContext();
  const [backgroundColor, setBackgroundColor] = useState("");

  const [passWidth, setPassWidth] = useState("0%");

  const setBackground = () => {
    if (password && password.length === 1) {
      setBackgroundColor("white");
      setPassWidth("0%");
    } else if (password && password.length > 1 && password.length <= 5) {
      setBackgroundColor("#cb473e");
      setPassWidth("25%");
    } else if (password && password.length >= 6 && password.length <= 10) {
      setBackgroundColor("#f07d58");
      setPassWidth("50%");
    } else if (password && password.length > 10) {
      setBackgroundColor("#55a95d");
      setPassWidth("100%");
    } else {
      setBackgroundColor("white");
      setPassWidth("0%");
    }
  };

  useEffect(() => {
    setBackground();
  }, [password]);

  const handleGeneratePassword = () => {
    if (passwordLength) {
      generatePassword();
    }
  };

  const handleCopy = () => {
    if(password.length === 0){
      return;
    }
    navigator.clipboard.writeText(password);
    openModal();
  };

  return (
    <div>
      <div className={styles.password_container}>
        <h2 className={styles.password}>{password ? password : ""}</h2>

        <div className={styles.password_options}>
          <button onClick={handleCopy}>
            <FaCopy className={styles.button_icons} title="Copy" />
            {/* modal onclick */}
          </button>
          <button onClick={handleGeneratePassword}>
            <BsArrowCounterclockwise className={styles.button_icons} />
          </button>
        </div>
      </div>
      <div className={styles.password_progress}>
        <div
          className={styles.password_progress_bar}
          style={{ backgroundColor: backgroundColor, width: passWidth }}
        ></div>
      </div>
    </div>
  );
};

export default GeneratedPassword;
