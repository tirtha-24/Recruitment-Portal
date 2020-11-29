import {combineReducers} from 'redux'

import user from './user';
import job from './job';
import category from './category';
import company from './company';
import details from './details';

const appReducer = combineReducers({
  user,
  job,
  category,
  company,
  details
})

export default appReducer;
