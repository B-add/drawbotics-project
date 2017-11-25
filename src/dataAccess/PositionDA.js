import axios from 'axios';

export const getPositionsWS = () => {
  return axios.get('http://localhost:3001/position');
};

export const addSkillToPositionWS = (positionId, skillName) => {
  return axios.post('http://localhost:3001/position/addSkill', {
    id: positionId,
    skill: skillName
  });
};