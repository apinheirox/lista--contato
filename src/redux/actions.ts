import { Contact } from "../components/Contact";

export const ADD_CONTACT = "ADD_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

let nextId = 0;

export const addContact = (contact: Contact) => ({
  type: ADD_CONTACT,
  payload: { ...contact, id: nextId++ }
});

export const removeContact = (id: number) => ({
  type: REMOVE_CONTACT,
  payload: id
});

export const editContact = (contact: Contact) => ({
  type: EDIT_CONTACT,
  payload: contact
});
