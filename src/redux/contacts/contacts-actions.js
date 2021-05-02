import types from './contacts-types';
import { v4 as genId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = ({ name, number, id }) => {
//   return {
//     type: types.AddContact,
//     payload: { name, number, id: genId() },
//   };
// };

const addContact = createAction(types.AddContact, ({ name, number }) => {
  return { payload: { name, number, id: genId() } };
});

// const deleteContact = contactId => {
//   return {
//     type: types.DeleteContact,
//     payload: contactId,
//   };
// };

const deleteContact = createAction(types.DeleteContact);

// const filterChange = value => {
//   return {
//     type: types.FilterChange,
//     payload: value,
//   };
// };

const filterChange = createAction(types.FilterChange);

export default { addContact, deleteContact, filterChange };
