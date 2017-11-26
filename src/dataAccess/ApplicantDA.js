import axios from 'axios';

export const getAllApplicantsWS = () => {
  return axios.get('http://localhost:3001/candidate');
};