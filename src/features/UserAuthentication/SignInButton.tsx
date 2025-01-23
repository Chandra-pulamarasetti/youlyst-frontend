"use client";

import { useState } from "react";
import LoginModal from "./Login/Login";

import styles from "./user-authentication.module.css";
import SignUpModal from "./SignUp/SignUp";
import { ModalNames } from "./types";
import ResetPassword from "./ResetPassword/ResentPassword";

const SignInButton = () => {
  const [modalName, setModalName] = useState<null | ModalNames>(null);

  const handleClose = () => setModalName(null);

  const changeModalName = (name: ModalNames) => setModalName(name);

  return (
    <div>
      <div
        className={styles.signInButton}
        onClick={() => changeModalName(ModalNames.SHOW_LOGIN)}
      >
        Sign In
      </div>

      {modalName === ModalNames.SHOW_LOGIN && (
        <LoginModal onClose={handleClose} changeModalName={changeModalName} />
      )}

      {modalName === ModalNames.SHOW_SIGN_UP && (
        <SignUpModal onClose={handleClose} changeModalName={changeModalName} />
      )}
      {modalName === ModalNames.SHOW_RESET_PASSWORD && (
        <ResetPassword
          onClose={handleClose}
          changeModalName={changeModalName}
        />
      )}
    </div>
  );
};

export default SignInButton;
