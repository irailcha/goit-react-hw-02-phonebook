import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledField, SubmitButton } from './ContactForm.styled';
import { Formik } from 'formik';
import * as yup from 'yup';

// Схема валідації
const userSchema = yup.object().shape({
  name: yup.string().required().label("Ім'я"),
  number: yup.string().required().label('Номер'),
});

const ContactForm = ({ addContact, initialValues }) => {
  const onSubmit = (values, { resetForm }) => {
    addContact({ ...values });
    resetForm();
  };

 

return (
  <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={onSubmit}>
    {({ handleSubmit, handleChange, values, errors }) => (
    <StyledForm autoComplete='off' onSubmit={handleSubmit}>
    <label htmlFor='name'> 
    Name
    <StyledField 
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
    </label>
    <label htmlFor='number'>
    Number
    <StyledField
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
  />
    </label>
    <SubmitButton type='submit' >Add contact</SubmitButton>
    </StyledForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string
  }).isRequired
};

export default ContactForm;
