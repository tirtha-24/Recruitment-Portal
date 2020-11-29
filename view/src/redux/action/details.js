import axios from 'axios';
import { API } from '../../config';

const IP = API;

export const getPersonal = id  => {
  return {
    type: 'GET_PERSONAL',
    payload: axios.get(`${IP}/details/personal/` +id)
  }
}

export const getAcademics = id => {
    return {
      type: 'GET_ACADEMICS',
      payload: axios.get(`${IP}/details/academics/` + id)
    }
}

export const getAddress = id  => {
    return {
      type: 'GET_ADDRESS',
      payload: axios.get(`${IP}/details/address/` + id)
    }
}

export const getPhd_details = id  => {
    return {
      type: 'GET_PHD_details',
      payload: axios.get(`${IP}/details/phd_details/` + id)
    }
}

export const getPhd_sup = id  => {
  return {
    type: 'GET_PHD_sup',
    payload: axios.get(`${IP}/details/phd_sup/` + id)
  }
}

export const getPastemployment = id  => {
    return {
      type: 'GET_PASTEMPLOYMENT',
      payload: axios.get(`${IP}/details/pastemployment/` + id)
    }
}

export const getPreemployment = id  => {
    return {
      type: 'GET_PREEMPLOYMENT',
      payload: axios.get(`${IP}/details/preemployment/` + id)
    }
}

export const getAdminexperience = id  => {
    return {
      type: 'GET_ADMINEXPERIENCE',
      payload: axios.get(`${IP}/details/adminexperience/` + id)
    }
}

export const getConsultancyprojects = id  => {
    return {
      type: 'GET_CONSULTANCYPROJECTS',
      payload: axios.get(`${IP}/details/consultancyprojects/` + id)
    }
}

export const getOutreachyprojects = id  => {
    return {
      type: 'GET_OUTREACHYPROJECTS',
      payload: axios.get(`${IP}/details/outreachyprojects/` + id)
    }
}

export const getRdprojects = id  => {
    return {
      type: 'GET_RDPROJECTS',
      payload: axios.get(`${IP}/details/rdprojects/` + id)
    }
}

export const getFacultymobilityprog = id  => {
    return {
      type: 'GET_FACULTYMOBILITYPROG',
      payload: axios.get(`${IP}/details/facultymobilityprog/` + id)
    }
}

export const getInnovproddev = id  => {
    return {
      type: 'GET_INNOVPRODDEV',
      payload: axios.get(`${IP}/details/innovproddev/` + id)
    }
}

export const getProfessionalbodies = id  => {
    return {
      type: 'GET_PROFESSIONALBODIES',
      payload: axios.get(`${IP}/details/professionalbodies/` + id)
    }
}

export const getPublications = id  => {
    return {
      type: 'GET_PUBLICATIONS',
      payload: axios.get(`${IP}/details/publications/` + id)
    }
}

export const getQualityresearchpublications = id  => {
    return {
      type: 'GET_QUALITYRESEARCHPUBLICATIONS',
      payload: axios.get(`${IP}/details/qualityresearchpublications/` + id)
    }
}

export const getPatent = id  => {
    return {
      type: 'GET_PATENT',
      payload: axios.get(`${IP}/details/patent/` + id)
    }
}

export const getReference = id  => {
    return {
      type: 'GET_REFERENCE',
      payload: axios.get(`${IP}/details/reference/` + id)
    }
}

export const getSpecialawards = id  => {
    return {
      type: 'GET_SPECIALAWARDS',
      payload: axios.get(`${IP}/details/specialawards/` + id)
    }
}

export const getHandwritten = id  => {
    return {
      type: 'GET_HANDWRITTEN',
      payload: axios.get(`${IP}/details/handwritten/` + id)
    }
}

export const getOtherinfo = id  => {
    return {
      type: 'GET_OTHERINFO',
      payload: axios.get(`${IP}/details/otherinfo/` + id)
    }
}

export const getUpload = id  => {
    return {
      type: 'GET_UPLOAD',
      payload: axios.get(`${IP}/details/upload/` + id)
    }
}

export const getDocuments = id  => {
  return {
    type: 'GET_DOCUMENTS',
    payload: axios.get(`${IP}/details/documents/` + id)
  }
}

export const getStates = () =>{
    return {
        type: 'GET_STATES',
        payload: axios.get(`${IP}/states`)
      }
}


export const getDepartments = () =>{
  return {
      type: 'GET_DEPT',
      payload: axios.get(`${IP}/departments`)
    }
}

export const getApplication = id  => {
  return {
    type: 'GET_APPLICATION',
    payload: axios.get(`${IP}/details/application/` + id)
  }
}

