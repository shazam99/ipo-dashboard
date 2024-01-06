//action.js
export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const setTheme = (theme) => ({
    type: 'SET_THEME',
    payload: theme,
});

export const registerUser = (user) => ({
    type: 'REGISTER_USER',
    payload: user,
});

export const setFavourite = (fav) => ({
    type: 'SET_FAV',
    payload: fav,
})



