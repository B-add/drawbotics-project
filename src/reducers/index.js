import { combineReducers } from 'redux';
import positionsReducer from './positionsReducer';
import { skillForm } from "./formModels";
import { combineForms } from 'react-redux-form';

export default combineReducers({
  positionsReducer,
  form: combineForms({
    skillForm
  }, 'form')
});