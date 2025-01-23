import Modal from "@/components/Modal/Modal";
import { ResetPwdProps } from "../types";

import styles from "../user-authentication.module.css";
import YouLystLogo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/Input";

const ResetPassword: React.FC<ResetPwdProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={styles.resetPwd}>
        <div className={styles.title}>
          Reset your password
          <div className={styles.description}>
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </div>
        </div>

        <InputField
          id={"signup-email"}
          placeholder={"Enter your Email"}
          value={""}
          onChange={() => null}
        />

        <div className={styles.terms}>Return to login</div>
        <Button label={"Continue"} onClick={() => null} />
      </div>
    </Modal>
  );
};

export default ResetPassword;
