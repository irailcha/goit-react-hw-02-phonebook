import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import GlobalStyle from './GlobalStyle';
import './App.styled';
import {SectionStyle, TitleStyle, TitleContactsStyle, ContactListStyle} from './App.styled'

import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  
  }

  addContact = newContact => {
    
    const {name, number} = newContact;

    const isExist = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase())
      
    if (isExist) {
      alert(`${name} is already in contacts.`);
      
      return;
    }
    const newContactData = {
    name: name,
    number: number,
    id: nanoid()
  };

  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContactData]
  }));
};
  



  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };


  changeContact=newContact=>{
console.log(newContact);
this.setState(prevState => ({
  filter: newContact
}))
  };





  

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      
    );
    return (
      <SectionStyle>
        <TitleStyle>Phonebook</TitleStyle>
        <ContactForm addContact={this.addContact} 
        initialValues={{name:'', number:'', id: nanoid()}}/>
        <TitleContactsStyle>Contacts</TitleContactsStyle>

        <ContactListStyle>
        <Filter 
        name={this.state.filter}
        changeContact={this.changeContact}
        />
        <ContactList
  
        onDelete={this.deleteContact}
        contacts={filteredContacts}/>
        </ContactListStyle>

        <GlobalStyle/>
      </SectionStyle>
    );
  }
}

export default App;
