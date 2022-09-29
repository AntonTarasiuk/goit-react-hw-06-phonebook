import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: "",
    },

    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        filteredValue(state, action) {
            state.filter = action.payload;
        },
        removeContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
})

export const { addContact, filteredValue, removeContact } = contactsSlice.actions; 

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['items']
}

export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);