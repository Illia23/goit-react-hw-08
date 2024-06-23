import { useDispatch } from "react-redux";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactsList from "../../components/ContactsList/ContactsList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operatoins";
import { useEffect } from "react";
import styles from "./ContactsPage.module.css"; 

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.pageContainer}>
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
