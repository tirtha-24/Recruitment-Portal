import {
  LOGIN_USER_PENDING,
  LOGIN_USER_FULFILLED,
  LOGIN_USER_REJECTED,
  REGISTER_USER_PENDING,
  REGISTER_USER_FULFILLED,
  REGISTER_USER_REJECTED,
} from './../constant/actiontypes'

const initalState = {
  isLoading: false,
  isError: false,
  isLogged: false,
  isClick: false,
  data: {},
}

const user = (state = initalState, action) => {
  switch(action.type){
    // Login User
    case LOGIN_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    // case LOGIN_USER_FULFILLED:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     isLogged: true,
    //     data: action.payload.data,
    //   };
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    
    // Register User
    case REGISTER_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {...state.data, ...action.payload.data.data}
      };
    case REGISTER_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return {
        ...state,
      }
  }
}

export default user;
