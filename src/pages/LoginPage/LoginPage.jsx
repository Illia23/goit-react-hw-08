import LoginForm from "../../components/LoginForm/LoginForm"
import css from './LoginPage.module.css'
 const LoginPage = () => {
  return (
      <div className={css.container}>
      <h1 className={css.header}>Welcome Back!</h1>
      <p className={css.subheader}>Please log in to your account</p>
          <LoginForm />
    </div>
  )
}

export default LoginPage;
