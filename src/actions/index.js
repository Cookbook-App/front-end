import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_START = 'ADD_START';
export const EDIT_START = 'EDIT_START';

export const REGISTRATION_START = 'REGISTRATION_START'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE'


const recipeToFilter = []

// Fetching actions
export const fetchCard = () => dispatch => {
    dispatch({ type: FETCH_START });
    axiosWithAuth()
    .get('/recipes')
    .then(res => {
        dispatch({type:FETCH_SUCCESS, payload: res.data })
        recipeToFilter.push(res.data)
    })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE })
    })
}

export const addRecipe = (index) => dispatch => {
    dispatch({ type: ADD_START });
    axiosWithAuth()
    .post('/recipes', index)
    .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data })
        return true
    })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE })
    })
}

export const updateRecipe = (id, editRecipe) => dispatch => {
    dispatch({ type: EDIT_START })
    axiosWithAuth()
    .put(`/recipes/${id}`, editRecipe)
    .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err.response })
    })
}


export const addUser = newUser => dispatch => {
    dispatch({ type: REGISTRATION_START })
    axiosWithAuth()
    .post('/users/register', newUser)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        dispatch({ type: REGISTRATION_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: REGISTRATION_FAILURE, payload: err.response })
    })
}