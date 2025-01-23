"use client";

import Modal from "@/components/Modal/Modal";
import React from "react";

import styles from "../user-authentication.module.css";
import InputField from "@/components/InputField/Input";
import Button from "@/components/Button/Button";
import IconGoogle from "@/components/Icons/IconGoogle";
import IconApple from "@/components/Icons/IconApple";
import YouLystLogo from "@/components/Logo/Logo";
import { ModalNames, SignUpProps } from "../types";

const SignUpModal: React.FC<SignUpProps> = ({ onClose, changeModalName }) => {
  return (
    <Modal onClose={onClose}>
      <div className={styles.signUp}>
        <YouLystLogo />
        <div className={styles.title}>
          Create an Account
          <div className={styles.description}>
            Enter your detail to create your account
          </div>
        </div>

        <div className={styles.names}>
          <InputField
            id={"signup-firstName"}
            placeholder={"First Name"}
            value={""}
            onChange={() => null}
          />
          <InputField
            id={"signup-lastName"}
            placeholder={"Last Name"}
            value={""}
            onChange={() => null}
          />
        </div>

        <InputField
          id={"signup-email"}
          placeholder={"Enter your Email"}
          value={""}
          onChange={() => null}
        />
        <InputField
          id={"signup-password"}
          placeholder={"Enter your Password"}
          value={""}
          onChange={() => null}
        />

        <InputField
          id={"singup-cnf"}
          placeholder={"Enter your Confirm Password"}
          value={""}
          onChange={() => null}
        />
        <InputField
          id={"signup-mobile"}
          placeholder={"Enter your Mobile Number"}
          value={""}
          onChange={() => null}
        />
        <div className={styles.terms}>
          I Accept the <a>Terms & Conditions</a>
        </div>
        <Button label={"Sign In"} onClick={() => null} />
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
          {"Already have an account ?"}{" "}
          <span onClick={() => changeModalName(ModalNames.SHOW_LOGIN)}>
            Login
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
