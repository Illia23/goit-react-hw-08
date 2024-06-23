import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import toast, { Toaster } from 'react-hot-toast';
export default function LoginForm() {
  const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(login(values))
    .unwrap()
          .then(data => {
            console.log(data)
            toast.success('Login successful!')
    })
          .catch(err => {
            console.log(err)
            toast.error('Login failed. Please try again.')
    } );

    actions.resetForm();
  };

  return (
    <>
      <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
      </Formik>
      <Toaster
       position="top-center"
       reverseOrder={false} />
    </>
    
  );
}