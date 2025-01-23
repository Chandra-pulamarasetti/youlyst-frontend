"use client";

import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  disable?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disable = false }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disable}>
      {label}
    </button>
  );
};

export default Button;
