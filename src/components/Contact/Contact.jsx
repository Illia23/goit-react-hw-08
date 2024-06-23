import { useDispatch, } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';
import toast, { Toaster } from 'react-hot-toast';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const deleteC = () => {
    dispatch(deleteContact(contact.id))
    .unwrap()
          .then(data => {
            console.log(data)
            toast.success('Delete successful!')
    })
          .catch(err => {
            console.log(err)
            toast.error('Delete failed. Please try again.')
    } );
}
  return (
    <>
      <li className={styles.item}>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={deleteC}>
        Delete
      </button>
      </li>
      <Toaster
       position="top-center"
       reverseOrder={false} />
    </>
    
  );
};

export default Contact;
