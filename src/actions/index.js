import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

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

