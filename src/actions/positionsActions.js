import { getPositionsWS } from "../dataAccess/PositionDA";

const preGetPositions = () => {
  return {
    type: 'PRE_GET_POS'
  }
};

const postGetPositions = (response) => {
  console.log("res", response)
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
