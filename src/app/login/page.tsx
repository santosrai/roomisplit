import styles from "../ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";

// TODO
const LoginPage = () => {
  return (
    <div className={styles.container}>
    <LoginForm/>
  </div>
  );
};

export default LoginPage;