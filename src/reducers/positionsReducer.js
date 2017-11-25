const initialState = {
  positions: [],
  positionsError: false,
  positionsLoading: false
};

const addSkill = (positions, positionId, skill) => {
  return positions.map((position) => {
     if (position._id === positionId) {
       position.skills.push(skill);
     }
     return position;
  });
};

const positionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRE_GET_POS':
      return Object.assign({}, state, {
        positionsError: false,
        positionsLoading: true
      });
    case 'POST_GET_POS':
      return Object.assign({}, state, {
        positions: action.positions,
        positionsError: false,
        positionsLoading: false
      });
    case 'GET_POS_ERROR':
      return Object.assign({}, state, {
        positionsError: true,
        positionsLoading: false
      });
    case 'POST_ADD_SKILL_POS':
      return Object.assign({}, state, {
        positions: addSkill(state.positions, action.positionId, action.skill)
      });
    case 'PRE_ADD_SKILL_POS':
    case 'ADD_SKILL_POS_ERROR':
    default:
      return state;
  }
};

export default positionsReducer;