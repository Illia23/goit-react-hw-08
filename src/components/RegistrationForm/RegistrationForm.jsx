import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from 'react-hot-toast';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values))
    .unwrap()
          .then(data => {
            console.log(data)
            toast.success('Register successful!')
    })
          .catch(err => {
            console.log(err)
            toast.error('Register failed. Please try again.')
    } );
    actions.resetForm();
  };

  return (
    <>
      <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
      </Formik>
       <Toaster
       position="top-center"
       reverseOrder={false} />
    </>
    
  );
}