export enum ModalNames {
  SHOW_LOGIN = "SHOW_LOGIN",
  SHOW_SIGN_UP = "SHOW_SIGN_UP",
  SHOW_RESET_PASSWORD = "SHOW_RESET_PASSWORD",
}

export type LoginProps = {
  onClose: () => void;
  changeModalName: (name: ModalNames) => void;
};

export type SignUpProps = {
  onClose: () => void;
  changeModalName: (name: ModalNames) => void;
};

export type ResetPwdProps = {
  onClose: () => void;
  changeModalName: (name: ModalNames) => void;
};
