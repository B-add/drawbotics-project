import {addSkillToPositionWS, getPositionsWS, removeSkillFromPositionWS} from "../dataAccess/PositionDA";

const preGetPositions = () => {
  return {
    type: 'PRE_GET_POS'
  }
};

const postGetPositions = (response) => {
  if (response.status === 200 || response.status === 304) {
    return {
      type: 'POST_GET_POS',
      positions: response.data
    }
  } else {
    return {
      type: 'GET_POS_ERROR',
      message: response.message
    }
  }
};

export const getPositions = () => {
  return dispatch => {
    dispatch(preGetPositions());
    return getPositionsWS()
      .then(response => dispatch(postGetPositions(response)))
      .catch(error => dispatch(postGetPositions(error)));
  }
};

const preAddSkillToPosition = () => {
  return {
    type: 'PRE_ADD_SKILL_POS'
  }
};

const postAddSkillToPosition = (response, positionId, skillName) => {
  if (response.status === 200 || response.status === 304) {
    return {
      type: 'POST_ADD_SKILL_POS',
      positionId: positionId,
      skill: skillName
    }
  } else {
    return {
      type: 'ADD_SKILL_POS_ERROR',
      message: response.message
    }
  }
};

export const addSkillToPosition = (positionId, skillName) => {
  return dispatch => {
    dispatch(preAddSkillToPosition());
    return addSkillToPositionWS(positionId, skillName)
      .then(response => dispatch(postAddSkillToPosition(response, positionId, skillName)))
      .catch(error => dispatch(postAddSkillToPosition(error)));
  }
};

const preRemoveSkillFromPosition = () => {
  return {
    type: 'PRE_REMOVE_SKILL_POS'
  }
};

const postRemoveSkillFromPosition = (response, positionId, skillName) => {
  if (response.status === 200 || response.status === 304) {
    return {
      type: 'POST_REMOVE_SKILL_POS',
      positionId: positionId,
      skill: skillName
    }
  } else {
    return {
      type: 'REMOVE_SKILL_POS_ERROR',
      message: response.message
    }
  }
};

export const removeSkillFromPosition = (positionId, skillName) => {
  return dispatch => {
    dispatch(preRemoveSkillFromPosition());
    return removeSkillFromPositionWS(positionId, skillName)
      .then(response => dispatch(postRemoveSkillFromPosition(response, positionId, skillName)))
      .catch(error => dispatch(postRemoveSkillFromPosition(error)));
  }
};