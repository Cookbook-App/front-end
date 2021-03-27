import NEW_RECIPE_START from '../actions'

export const initialState = {
    recipes: [],
    newRecipeData: [],
    user: {},
    fetching: false,
    error: ''
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case NEW_RECIPE_START:
            return {
                ...state,
                fetching: true
            }
            default:
                return {
                    ...state
                }
    }
}