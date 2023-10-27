import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllContact,
  addNewContact,
  deleteContact,
} from 'services/contactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (state, thunkAPI) => {
    try {
      const response = await fetchAllContact();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await addNewContact();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchAll',
  async (id, thunkAPI) => {
    try {
      const response = await deleteContact(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
