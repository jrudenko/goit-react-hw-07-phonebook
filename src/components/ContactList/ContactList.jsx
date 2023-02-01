import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSelectors';


function ContactList() {
    const contacts = useSelector(getContacts);
  
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
                
            ))}
        </List>
    );
};

export default ContactList;