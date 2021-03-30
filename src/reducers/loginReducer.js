
import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILURE} from "../actions";

const initialState = {
    isLoadingLogin: false,
    successLogin: false,
    email: '',
    password: ''
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
              ...state,
              isloadingLogin: true,
              successLogin: false
            };
          case LOGIN_SUCCESS:
            return {
              ...state,
              isloadingLogin: false,
              successLogin: true,
              email: action.payload,
              password:action.payload
            };
          case LOGIN_FAILURE:
            return {
              ...state,
              isloadingLogin: false,
              successLogin: false,
              email: "",
              password:""
            };
      
          default:
            return state;
    }
}