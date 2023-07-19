import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from '../../redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [values, setValues] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.some(({ name }) => name === values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ ...values, id: nanoid() }));
    setValues({ name: '', number: '' });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={values.number}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
