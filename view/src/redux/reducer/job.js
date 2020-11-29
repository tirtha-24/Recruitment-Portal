import {
  GET_JOB_PENDING,
  GET_JOB_FULFILLED,
  GET_JOB_REJECTED,

  ADD_JOB_PENDING,
  ADD_JOB_FULFILLED,
  ADD_JOB_REJECTED,
  
  UPDATE_JOB_PENDING,
  UPDATE_JOB_FULFILLED,
  UPDATE_JOB_REJECTED,
  
  DELETE_JOB_PENDING,
  DELETE_JOB_FULFILLED,
  DELETE_JOB_REJECTED,
} from './../constant/actiontypes'

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  info: {},
}

const job = (state = initialState, action) => {
  switch(action.type){
    // Get Job
    case GET_JOB_PENDING:
      return {
        state,
        isLoading: true,
      };
    case GET_JOB_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.result,
        info: action.payload.data.info,
      };
    case GET_JOB_REJECTED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    
    // Add Job
    case ADD_JOB_PENDING:
      return null;

    case ADD_JOB_FULFILLED:
      return null;
      
    case ADD_JOB_REJECTED:
        return null;
    
    // Update Job
    case UPDATE_JOB_PENDING:
        return null;
        
    case UPDATE_JOB_FULFILLED:
        return null;
        
    case UPDATE_JOB_REJECTED:
        return null;
    
    // Delete Job
    case DELETE_JOB_PENDING:
        return null;
        
    case DELETE_JOB_FULFILLED:
        return null;
        
    case DELETE_JOB_REJECTED:
        return null;
        
    default:
        return {
          ... state,
        };
  }
}

export default job;
