import { useDispatch, useSelector } from "react-redux";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactsList from "../../components/ContactsList/ContactsList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operatoins";
import { useEffect } from "react";
import styles from "./ContactsPage.module.css"; 
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
const ContactsPage = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.pageContainer}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <h1 className={styles.pageTitle}>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <div className={styles.contactSection}>
        <h2>Contacts</h2>
        <ContactsList />
      </div>
    </div>
  );
};

export default ContactsPage;
