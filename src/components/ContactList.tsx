import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addContact, removeContact, editContact } from "../redux/actions";
import { Contact } from "./Contact";
import ContactItem from "./ContactItem";

const ContactListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactList: React.FC = () => {
  const contacts = useSelector((state: any) => state.contacts);
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState<Contact>({
    id: 0,
    fullName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddContact = () => {
    dispatch(addContact(newContact));
    setNewContact({
      id: 0,
      fullName: "",
      email: "",
      phone: ""
    });
  };

  return (
    <ContactListWrapper>
      <div>
        <input
          type="text"
          name="fullName"
          value={newContact.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="text"
          name="email"
          value={newContact.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={newContact.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <button onClick={handleAddContact}>Add Contact</button>
      </div>
      <div>
        {contacts.map((contact: Contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </ContactListWrapper>
  );
};

export default ContactList;