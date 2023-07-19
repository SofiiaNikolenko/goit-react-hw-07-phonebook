import React from 'react';
import { ContactItem } from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { getStatusFilter } from '../../redux/filterSlice';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  function findContacts() {
    return contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase())
    );
  }

  return (
    <>
      {findContacts().map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </>
  );
}

export default ContactList;
