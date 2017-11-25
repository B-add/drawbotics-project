import axios from 'axios';

export const getPositionsWS = () => {
  return axios.get('http://localhost:3001/position', {
    headers: { 'Access-Control-Allow-Origin': '*' }
  });
};