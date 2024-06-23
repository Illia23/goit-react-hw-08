import RegistrationForm from "../../components/RegistrationForm/RegistrationForm"
import css from './RegistrationPage.module.css'
const RegistrationPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.header}>Create Your Account</h1>
      <p className={css.subheader}>Join us and start your journey today!</p>
      <RegistrationForm />
      </div>
      
  )
}

export default RegistrationPage