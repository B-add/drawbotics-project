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

export const removeSkillFromPositionWS = (positionId, skillName) => {
  console.log(positionId, skillName)
  return axios.post('http://localhost:3001/position/removeSkill', {
    id: positionId,
    skill: skillName
  });
};