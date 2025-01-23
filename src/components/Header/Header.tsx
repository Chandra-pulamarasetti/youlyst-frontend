import SignInButton from "@/features/UserAuthentication/SignInButton";
import YouLystLogo from "../Logo/Logo";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <YouLystLogo />
      <SignInButton />
    </div>
  );
};

export default Header;
