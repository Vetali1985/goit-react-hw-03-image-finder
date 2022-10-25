import { Component } from "react";
import {  Title ,Contacts, Container} from "./Container/Container.styled";
import {PhoneBookForm}  from "./PhoneBookForm/PhoneBookForm";
import { nanoid } from 'nanoid'
import { ContactList } from "./PhoneBookList/PhoneBookList";
import { Filter } from "./Filter/Filter";




class App extends Component  {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''

    
  };
 
  ContactAdd = (name, number) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    const checkingName = this.state.contacts.find(item => {
      return item.name === contact.name; 
    });

    if (checkingName) {
      return alert(`${contact.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

   ContactDel = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
   handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    
    return (
      <Container>
          <Title>Phonebook</Title>
        <PhoneBookForm ContactAdd={this.ContactAdd}
        />
        <Contacts>Contacts</Contacts>
        <Filter filter={this.state.filter}
                handleFilter={this.handleFilter} />
        <ContactList
          filteredContacts={this.getFilteredContacts()}
          ContactDel={this.ContactDel}
        />
        
      </Container>
     
     
    );
    
  }
};
export default App;