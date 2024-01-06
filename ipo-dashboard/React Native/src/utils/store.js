// store.js
import { createStore, combineReducers } from 'redux';

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        default:
            return state;
    }
};

const initialState = {
    theme: 'light',
    colors: {
        light: {
            background: '#ffffff',
            text: '#000000',
            textmuted: '#7B7B7B',
            header: '#ffffff',
            footer: '#ffffff',
            button: '#e74c3c',
            favCard: '#ffffff',
        },
        dark: {
            background: '#181818',
            text: '#ecf0f1',
            textmuted: '#F8F8F8',
            header: '#000',
            footer: '#181818',
            button: '#e74c3c',
            favCard: '#272727',
        },
    },
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return { ...state, theme: action.payload };
        default:
            return state;
    }
};

const registerUserReducer = (state = [], action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};

const favouriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAV':
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    registerUser: registerUserReducer,
    favourite: favouriteReducer,
});

const store = createStore(rootReducer);

export default store;
