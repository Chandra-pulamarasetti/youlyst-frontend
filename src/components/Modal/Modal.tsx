import React, { useCallback, useEffect, useRef, useState } from "react";

import styles from "./modal.module.css";
import Portal from "../Portal/Portal";

type ModalProps = {
  onClose?: () => void;
  showDismissIcon?: boolean;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  onClose,
  showDismissIcon = true,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      onClose?.();
    }, 300);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <Portal>
      <div className={styles.modalOverlay}>
        <div
          className={`${styles.modal} ${isClosing ? styles.modalClosing : ""}`}
          ref={modalRef}
        >
          {showDismissIcon && onClose && (
            <div className={styles.modalClose} onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 6L18 18M6 18L18 6L6 18Z"
                  stroke="#747681"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
