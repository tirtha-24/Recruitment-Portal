import {
  GET_PERSONAL_PENDING,
  GET_PERSONAL_FULFILLED,
  GET_PERSONAL_REJECTED, 

  GET_ACADEMICS_PENDING,
  GET_ACADEMICS_FULFILLED,
  GET_ACADEMICS_REJECTED,

  GET_ADDRESS_PENDING,
  GET_ADDRESS_FULFILLED,
  GET_ADDRESS_REJECTED,

  GET_PHD_details_PENDING,
  GET_PHD_details_FULFILLED,
  GET_PHD_details_REJECTED,

  GET_PHD_sup_PENDING,
  GET_PHD_sup_FULFILLED,
  GET_PHD_sup_REJECTED,

  GET_PASTEMPLOYMENT_PENDING,
  GET_PASTEMPLOYMENT_FULFILLED,
  GET_PASTEMPLOYMENT_REJECTED,
 
  GET_PREEMPLOYMENT_PENDING,
  GET_PREEMPLOYMENT_FULFILLED,
  GET_PREEMPLOYMENT_REJECTED,

  GET_ADMINEXPERIENCE_PENDING,
  GET_ADMINEXPERIENCE_FULFILLED,
  GET_ADMINEXPERIENCE_REJECTED,

  GET_OUTREACHYPROJECTS_PENDING,
  GET_OUTREACHYPROJECTS_FULFILLED,
  GET_OUTREACHYPROJECTS_REJECTED,

  GET_CONSULTANCYPROJECTS_PENDING,
  GET_CONSULTANCYPROJECTS_FULFILLED,
  GET_CONSULTANCYPROJECTS_REJECTED,

  GET_RDPROJECTS_PENDING,
  GET_RDPROJECTS_FULFILLED,
  GET_RDPROJECTS_REJECTED,

  GET_FACULTYMOBILITYPROG_PENDING,
  GET_FACULTYMOBILITYPROG_FULFILLED,
  GET_FACULTYMOBILITYPROG_REJECTED,

  GET_INNOVPRODDEV_PENDING,
  GET_INNOVPRODDEV_FULFILLED,
  GET_INNOVPRODDEV_REJECTED,

  GET_PROFESSIONALBODIES_PENDING,
  GET_PROFESSIONALBODIES_FULFILLED,
  GET_PROFESSIONALBODIES_REJECTED,

  GET_PUBLICATIONS_PENDING,
  GET_PUBLICATIONS_FULFILLED,
  GET_PUBLICATIONS_REJECTED,

  GET_QUALITYRESEARCHPUBLICATIONS_PENDING,
  GET_QUALITYRESEARCHPUBLICATIONS_FULFILLED,
  GET_QUALITYRESEARCHPUBLICATIONS_REJECTED,

  GET_PATENT_PENDING,
  GET_PATENT_FULFILLED,
  GET_PATENT_REJECTED,

  GET_REFERENCE_PENDING,
  GET_REFERENCE_FULFILLED,
  GET_REFERENCE_REJECTED,

  GET_SPECIALAWARDS_PENDING,
  GET_SPECIALAWARDS_FULFILLED,
  GET_SPECIALAWARDS_REJECTED,

  GET_HANDWRITTEN_PENDING,
  GET_HANDWRITTEN_FULFILLED,
  GET_HANDWRITTEN_REJECTED,

  GET_OTHERINFO_PENDING,
  GET_OTHERINFO_FULFILLED, 
  GET_OTHERINFO_REJECTED,

  GET_UPLOAD_PENDING,
  GET_UPLOAD_FULFILLED,
  GET_UPLOAD_REJECTED,

  GET_DOCUMENTS_PENDING,
  GET_DOCUMENTS_FULFILLED,
  GET_DOCUMENTS_REJECTED,

  GET_STATES_PENDING,
  GET_STATES_FULFILLED,
  GET_STATES_REJECTED,

  GET_DEPT_PENDING,
  GET_DEPT_FULFILLED,
  GET_DEPT_REJECTED,

  GET_APPLICATION_PENDING,
  GET_APPLICATION_FULFILLED,
  GET_APPLICATION_REJECTED,
  
  } from './../constant/actiontypes'

  const initialState = {
    isLoading: false,
    isError: false,
    data: {},
  }

  const details = (state = initialState, action) => {
    switch(action.type){
     
      case GET_PERSONAL_PENDING:
        return {
          state,
          isLoading: true,
        };
      case GET_PERSONAL_FULFILLED:
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload.data,
        };
      case GET_PERSONAL_REJECTED:
        return {
          ...state,
          isError: true,
          isLoading: false,
        };


    case GET_ACADEMICS_PENDING:
            return {
              state,
              isLoading: true,
        };
    case GET_ACADEMICS_FULFILLED:
            return {
              ...state,
              isLoading: false,
              isError: false,
              data: action.payload.data
        };
    case GET_ACADEMICS_REJECTED:
            return {
              ...state,
              isError: true,
              isLoading: false,
        };


    case GET_ADDRESS_PENDING:
            return {
                  state,
                  isLoading: true,
        };
    case GET_ADDRESS_FULFILLED:
            return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  data: action.payload.data
        };
    case GET_ADDRESS_REJECTED:
            return {
                  ...state,
                  isError: true,
                  isLoading: false,
        };


    case GET_PHD_details_PENDING:
            return {
                      state,
                      isLoading: true,
        };
    case GET_PHD_details_FULFILLED:
            return {
                      ...state,
                      isLoading: false,
                      isError: false,
                      data: action.payload.data
        };
    case GET_PHD_details_REJECTED:
        return {
                ...state,
              isError: true,
              isLoading: false,
        };

    case GET_PHD_sup_PENDING:
            return {
                      state,
                      isLoading: true,
        };
    case GET_PHD_sup_FULFILLED:
            return {
                      ...state,
                      isLoading: false,
                      isError: false,
                      data: action.payload.data
        };
    case GET_PHD_sup_REJECTED:
        return {
                ...state,
              isError: true,
              isLoading: false,
        };

    case GET_PASTEMPLOYMENT_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_PASTEMPLOYMENT_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_PASTEMPLOYMENT_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_PREEMPLOYMENT_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_PREEMPLOYMENT_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_PREEMPLOYMENT_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_ADMINEXPERIENCE_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_ADMINEXPERIENCE_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_ADMINEXPERIENCE_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_CONSULTANCYPROJECTS_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_CONSULTANCYPROJECTS_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_CONSULTANCYPROJECTS_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_OUTREACHYPROJECTS_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_OUTREACHYPROJECTS_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_OUTREACHYPROJECTS_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_RDPROJECTS_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_RDPROJECTS_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_RDPROJECTS_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_FACULTYMOBILITYPROG_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_FACULTYMOBILITYPROG_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_FACULTYMOBILITYPROG_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_INNOVPRODDEV_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_INNOVPRODDEV_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_INNOVPRODDEV_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_PROFESSIONALBODIES_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_PROFESSIONALBODIES_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_PROFESSIONALBODIES_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_PUBLICATIONS_PENDING:
        return {
                state,
                isLoading: true,
        };
   case GET_PUBLICATIONS_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_PUBLICATIONS_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_QUALITYRESEARCHPUBLICATIONS_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_QUALITYRESEARCHPUBLICATIONS_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_QUALITYRESEARCHPUBLICATIONS_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_PATENT_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_PATENT_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_PATENT_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_REFERENCE_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_REFERENCE_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_REFERENCE_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_SPECIALAWARDS_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_SPECIALAWARDS_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_SPECIALAWARDS_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_HANDWRITTEN_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_HANDWRITTEN_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_HANDWRITTEN_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };


    case GET_OTHERINFO_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_OTHERINFO_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_OTHERINFO_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };

        
    case GET_UPLOAD_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_UPLOAD_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };

    case GET_UPLOAD_REJECTED:
            return {
                    ...state,
                    isError: true,
                    isLoading: false,
            }; 
        
    case GET_DOCUMENTS_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        };  

    case GET_DOCUMENTS_PENDING:
            return {
                    state,
                    isLoading: true,
            };
    case GET_DOCUMENTS_FULFILLED:
            return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload.data
            };

    case GET_STATES_PENDING:
        return {
                state,
                isLoading: true,
        };
    case GET_STATES_FULFILLED:
        return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
        };
    case GET_STATES_REJECTED:
        return {
                ...state,
                isError: true,
                isLoading: false,
        }; 
        
        case GET_DEPT_PENDING:
            return {
                    state,
                    isLoading: true,
            };
        case GET_DEPT_FULFILLED:
            return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload.data
            };
        case GET_DEPT_REJECTED:
            return {
                    ...state,
                    isError: true,
                    isLoading: false,
            };

        case GET_APPLICATION_PENDING:
                return {
                  state,
                  isLoading: true,
                };
        case GET_APPLICATION_FULFILLED:
                return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  data: action.payload.data.result,
                  info: action.payload.data.info,
                };
        case GET_APPLICATION_REJECTED:
                return {
                  ...state,
                  isError: true,
                  isLoading: false,
                };

      default:
          return {
            ... state,
          };
    }
  }
  
  export default details;


