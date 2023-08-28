import React from 'react';
import './Filter.styled'
import PropTypes from 'prop-types';
import {FilterStyle} from './Filter.styled';


const Filter = ({ name, changeContact}) => {
    
return(
<FilterStyle>
    <input
    type='text'
    name="Find contact"
    value={name}
    onChange={evt=>
        changeContact(evt.target.value)
    
    }
    placeholder='Filter'
/>
    
</FilterStyle>


)
}

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    changeContact: PropTypes.func.isRequired,
  };


export default Filter;