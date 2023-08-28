import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.styled';

import { StyledForm, StyledField, SubmitButton } from './ContactForm.styled';

import { Formik} from 'formik';
import * as yup from 'yup';

// // import {PropTypes} from 'prop-types';

let userSchema  = yup.object().shape({
    name : yup.string().required().label('Name'),
    number : yup.string().required().label('Number')
  });




const ContactForm = ({ addContact, initialValues }) => {
    const onSubmit = (values, { resetForm }) => {

      addContact({ ...values });
      resetForm();

  
    };

return(
<Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={onSubmit}>
<StyledForm autoComplete='off'>
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
<SubmitButton type="button">Add contact</SubmitButton>

</StyledForm>

</Formik>

)}


ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string
  }).isRequired
};


export default ContactForm;