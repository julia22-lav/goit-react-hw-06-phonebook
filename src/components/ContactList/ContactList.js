import { Component } from 'react';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contactsToShow, deleteContact } = this.props;
    const contacts = contactsToShow();
    return (
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              id={id}
              deleteContact={deleteContact}
              className={s.ContactList}
            />
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contactsToShow: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
