import React from 'react';
import PropTypes from 'prop-types';
import  '/Filter/Filter';
import {ContactListStyle} from './FilterList.styled'


const FilterList = ({ contacts, filter, onDelete }) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <ContactListStyle>
        {filteredContacts.map(contact => (
          <li key={contact.id}>{contact.name} : {contact.number}
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ContactListStyle>

      
    );
  }
  
  FilterList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ).isRequired,
    filter: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  };
  


export default FilterList;