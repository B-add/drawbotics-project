const initialState = {
  positions: [],
  positionsError: false,
  positionsLoading: false
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
    default:
      return state;
  }
};

export default positionsReducer;