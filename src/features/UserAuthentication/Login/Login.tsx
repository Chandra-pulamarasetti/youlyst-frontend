"use client";

import Modal from "@/components/Modal/Modal";
import React from "react";

import styles from "../user-authentication.module.css";
import InputField from "@/components/InputField/Input";
import Button from "@/components/Button/Button";
import IconGoogle from "@/components/Icons/IconGoogle";
import IconApple from "@/components/Icons/IconApple";
import YouLystLogo from "@/components/Logo/Logo";
import { LoginProps, ModalNames } from "../types";

const LoginModal: React.FC<LoginProps> = ({ onClose, changeModalName }) => {
  return (
    <Modal onClose={onClose}>
      <div className={styles.login}>
        <YouLystLogo />
        <div className={styles.title}>
          Login to your Account
          <div className={styles.description}>
            Enter your Login detail to open your account{" "}
          </div>
        </div>

        <InputField
          id={"login-email"}
          placeholder={"Email or Phone Number"}
          value={""}
          onChange={() => null}
        />
        <InputField
          id={"login-password"}
          placeholder={"Password"}
          value={""}
          onChange={() => null}
        />
        <div
          className={styles.forgotPasswordText}
          onClick={() => changeModalName(ModalNames.SHOW_RESET_PASSWORD)}
        >
          Forgot password?
        </div>
        <Button label={"Login"} onClick={() => null} />
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <div>OR</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.options}>
          <div>
            <IconGoogle /> Google
          </div>
          <div>
            <IconApple /> Apple
          </div>
        </div>
        <div className={styles.noAccount}>
          {"Don’t have an account yet?"}{" "}
          <span onClick={() => changeModalName(ModalNames.SHOW_SIGN_UP)}>
            Sign Up
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
