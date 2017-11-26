import { combineReducers } from 'redux';
import positionsReducer from './positionsReducer';
import {positionForm, skillForm} from "./formModels";
import { combineForms } from 'react-redux-form';
import applicantsReducer from "./applicantsReducer";

export default combineReducers({
  positionsReducer,
  applicantsReducer,
  form: combineForms({
    skillForm,
    positionForm
  }, 'form')
});