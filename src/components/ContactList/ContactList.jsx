import ContactItem from 'components/ContactItem';
import React from 'react';
import { useEffect } from 'react';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
// import { getContacts, getFilter } from 'redux/contactsSelectors';
import { fetchContacts } from 'redux/thunk';
import {getVisibleContacts} from "redux/contactsSelectors"

function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // const { items} = useSelector(getContacts);
  // const filter = useSelector(getFilter);
    
    //   useEffect(() => {
    // dispatch(fetchContacts());
    //   }, [dispatch]);
    
    // const getVisbleContacts = () => {
    //     if (items.length !== 0) {
    //         return items.filter(contact =>
    //             contact.fullname.toLowerCase().includes(filter.toLowerCase())
    //         );
    //     }
    // };
        
        return (
    <>
      {/* {isLoading && <ContactListMesage>Loading contacts...</ContactListMesage>}
      {error && <ContactListMesage>{error}</ContactListMesage>} */}
      {/* {items.length !== 0 && ( */}
        <List>
            {filteredContacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
                
            ))}
        </List>
      {/* )} */}
    </>
  );
};

export default ContactList;