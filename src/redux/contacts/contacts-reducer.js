import { combineReducers } from 'redux';
// import types from './contacts-types';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.AddContact:
//       if (state.find(contact => contact.name === payload.name)) {
//         alert(`${payload.name} is already in contacts.`);
//         return state;
//       }
//       return [...state, payload];
//     case types.DeleteContact:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    if (state.find(contact => contact.name === payload.name)) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FilterChange:
//       return payload;
//     default:
//       return state;
//   }
// };

const filterReducer = createReducer('', {
  [actions.filterChange]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
