import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeContact, editContact } from "../redux/actions";
import { Contact } from "./Contact";

const ContactItemWrapper = styled.div`
  margin-bottom: 10px;
`;

const ContactItem: React.FC<{ contact: Contact }> = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);

  const handleRemoveContact = () => {
    dispatch(removeContact(contact.id));
  };

  const handleEditContact = () => {
    dispatch(editContact(editedContact));
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <ContactItemWrapper>
      {isEditing ? (
        <>
          <input
            type="text"
            name="fullName"
            value={editedContact.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={editedContact.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            value={editedContact.phone}
            onChange={handleChange}
          />
          <button onClick={handleEditContact}>Save</button>
        </>
      ) : (
        <>
          <span>{contact.fullName}</span>
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleRemoveContact}>Remove</button>
        </>
      )}
    </ContactItemWrapper>
  );
};

export default ContactItem;