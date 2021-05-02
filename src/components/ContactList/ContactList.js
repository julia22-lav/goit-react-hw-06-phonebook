import { Component } from 'react';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

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
  deleteContact: PropTypes.func.isRequired,
};

const getContactsToShow = ({ filter, items }) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
    name ? name.toLowerCase().includes(normalizedFilter) : false,
  );
};

const mapStateToProps = state => ({
  contacts: getContactsToShow(state.contacts),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(actions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
