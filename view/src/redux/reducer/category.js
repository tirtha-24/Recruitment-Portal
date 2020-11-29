import {
  GET_CATEGORY_PENDING,
  GET_CATEGORY_FULFILLED,
  GET_CATEGORY_REJECTED,

  ADD_CATEGORY_PENDING,
  ADD_CATEGORY_FULFILLED,
  ADD_CATEGORY_REJECTED,
  
  UPDATE_CATEGORY_PENDING,
  UPDATE_CATEGORY_FULFILLED,
  UPDATE_CATEGORY_REJECTED,
  
  DELETE_CATEGORY_PENDING,
  DELETE_CATEGORY_FULFILLED,
  DELETE_CATEGORY_REJECTED,
} from './../constant/actiontypes'

const initialState = {
  isLoading: true,
  isError: false,
  data: [],
}

const category = (state = initialState, action) => {
  switch(action.type){
    // Get Job
    case GET_CATEGORY_PENDING:
      return {
        state,
        isLoading: true,
      };
    case GET_CATEGORY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case GET_CATEGORY_REJECTED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    
    // Add Job
    case ADD_CATEGORY_PENDING:
      return null;

    case ADD_CATEGORY_FULFILLED:
      return null;
      
    case ADD_CATEGORY_REJECTED:
        return null;
    
    // Update Job
    case UPDATE_CATEGORY_PENDING:
        return null;
        
    case UPDATE_CATEGORY_FULFILLED:
        return null;
        
    case UPDATE_CATEGORY_REJECTED:
        return null;
    
    // Delete Job
    case DELETE_CATEGORY_PENDING:
        return null;
        
    case DELETE_CATEGORY_FULFILLED:
        return null;
        
    case DELETE_CATEGORY_REJECTED:
        return null;
        
    default:
        return {
          ... state,
        };
  }
}

export default category;
