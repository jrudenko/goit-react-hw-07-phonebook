// export const getFilter = state => state.filter.content;
// export const getContacts = state => state.contacts;


export const getVisibleContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.contacts.query)
  );
};

export const getContacts = state => state.contacts.contacts;