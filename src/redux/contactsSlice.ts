import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../schema/contact";

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
    },
    updateContact(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setContacts(state, action: PayloadAction<Contact[]>) {
      state.contacts = action.payload;
    },
  },
});

export const { addContact, updateContact, deleteContact, setContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;
