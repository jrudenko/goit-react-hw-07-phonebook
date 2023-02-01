import { Item, Button } from './ContactItem.styled'

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

function ContactItem({ id, name, number}) {
    const dispatch = useDispatch();
    const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
    return (
        <Item key={id}>
            <p>
                {name}: {number}
            </p>
            <Button type="button" onClick={() => onDeleteContact(id)}>
                Delete
            </Button>
        </Item>
    );
};

export default ContactItem;
