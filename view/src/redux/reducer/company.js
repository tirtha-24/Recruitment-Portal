import {
  GET_COMPANY_PENDING,
  GET_COMPANY_FULFILLED,
  GET_COMPANY_REJECTED,

  ADD_COMPANY_PENDING,
  ADD_COMPANY_FULFILLED,
  ADD_COMPANY_REJECTED,
  
  UPDATE_COMPANY_PENDING,
  UPDATE_COMPANY_FULFILLED,
  UPDATE_COMPANY_REJECTED,
  
  DELETE_COMPANY_PENDING,
  DELETE_COMPANY_FULFILLED,
  DELETE_COMPANY_REJECTED,
} from './../constant/actiontypes'

const initialState = {
  isLoading: true,
  isError: false,
  data: [],
  success: false,
  info: {},
}

const company = (state = initialState, action) => {
  switch(action.type){
    // Get Job
    case GET_COMPANY_PENDING:
      return {
        state,
        isLoading: true,
      };
    case GET_COMPANY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.result,
        info: action.payload.data.info,
      };
    case GET_COMPANY_REJECTED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    
    // Add Job
    case ADD_COMPANY_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_COMPANY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, action.payload.data.result]
      };
      
    case ADD_COMPANY_REJECTED:
        return {
          isLoading: false,
          isError: true,
        };
    
    // Update Job
    case UPDATE_COMPANY_PENDING:
        return null;
        
    case UPDATE_COMPANY_FULFILLED:
        return null;
        
    case UPDATE_COMPANY_REJECTED:
        return null;
    
    // Delete Job
    case DELETE_COMPANY_PENDING:
        return null;
        
    case DELETE_COMPANY_FULFILLED:
        return null;
        
    case DELETE_COMPANY_REJECTED:
        return null;
        
    default:
        // return {
        //   ...state,
        // };
        return state;
  }
}

export default company;
