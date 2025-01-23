"use client";

import React from "react";
import styles from "./input.module.css";

interface InputFieldProps {
  type?: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <div className={styles.inputGroup}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
