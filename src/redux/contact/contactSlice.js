import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/operations';

const { createSlice } = require('@reduxjs/toolkit');

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },

  extraReducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => {
        return contact.id !== action.payload;
      });
    },
  },
});

export const { addContact, changeFilter, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

// https://redux-toolkit.js.org/api/createReducer#builderaddcase
