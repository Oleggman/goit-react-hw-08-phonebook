import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contact);
    Notiflix.Notify.success(`${response.data.name} has been added to your contacts`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    Notiflix.Notify.success(`${response.data.name} has been deleted from your contacts`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
