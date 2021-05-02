import './App.css';
import { Component } from 'react';
import ContactForm from './components/ContactForm';
// import { v4 as genId } from 'uuid';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem(`contacts`));

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addNewContact = ({ name, number }) => {
  //   const nameList = this.state.contacts.map(contact => contact.name);
  //   if (nameList.includes(name)) {
  //     alert(`${name} already in your contact list`);
  //     return;
  //   }

  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, { name, id: genId(), number }],
  //   }));
  // };

  // contactsToShow = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) => {
  //     return name ? name.toLowerCase().includes(normalizedFilter) : false;
  //   });
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
  //     };
  //   });
  // };

  // filterChange = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default App;
