import {combinereducers} from 'redux';
import types from './contacts-types';

const itemsReducer = (state = [], {type, payload} => {
    switch (type) {
        case types.AddContact:
            if(state.find(contact => contact.name === payload.name)) {
                alert(`${payload.name} is already in contacts.`);
                return state;
            }
            return [...state, payload];
            case types.DeleteContact:
                return state.filter ((<{id}) => id !== payload);
                default:
                    return state;
    }
});

const filterReducer = (state= '', {type, payload}) => {
    switch(type) {
        case types.FilterChange:
            return payload;
            default:
                return state;
    }
};

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

export default contactsReducer;