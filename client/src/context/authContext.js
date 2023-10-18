import React, { useReducer, createContext } from 'react';
import { decode } from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';


const initialState = {
    user: null
}

if(localStorage.getItem('token')) {
    const decodedToken = jwtDecode(localStorage.getItem('token'));

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
    } else {
        initialState.user = decodedToken;
    }
};

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    
})