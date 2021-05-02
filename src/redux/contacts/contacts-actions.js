import types from './contacts-types';
import { v4 as genId } from 'uuid';

const addContact = ({ name, number, id }) => {
  return {
    type: types.AddContact,
    payload: { name, number, id: genId() },
  };
};

const deleteContact = contactId => {
  return {
    type: types.DeleteContact,
    payload: contactId,
  };
};

const filterChange = value => {
  return {
    type: types.FilterChange,
    payload: value,
  };
};

export default { addContact, deleteContact, filterChange };
