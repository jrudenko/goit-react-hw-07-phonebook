import { createSlice } from '@reduxjs/toolkit';
import { contactsInitstate } from './contactsInitState';
import { STATUS } from './contactsStatus';
import { fetchContacts, addContact, deleteContact } from './thunk';

const handlePending = state => {
  state.status = STATUS.loading;
};

const handleRejected = state => {
  state.status = STATUS.error;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitstate,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = STATUS.success;
      state.contacts = payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, { payload }) => {
      state.status = STATUS.success;
      state.contacts.push(payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.status = STATUS.success;
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload.id
      );
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { setQuery } = contactsSlice.actions;

export default contactsSlice.reducer;

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   query: '',
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContacts: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     setQuery: (state, action) => {
//       state.query = action.payload;
//     },
//   },
// });

// export const { addContacts, deleteContact, setQuery } = contactsSlice.actions;

// export default contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { addContact, fetchContacts, deleteContact } from './thunk';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [addContact.pending](state) {
//       state.isLoading = true;
//     },

//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.items.push(action.payload);
//     },
//     [addContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     [deleteContact.pending](state) {
//       state.isLoading = true;
//     },

//     [deleteContact.fulfilled](state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload.id
//       );
//     },
//     [deleteContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { setQuery } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
