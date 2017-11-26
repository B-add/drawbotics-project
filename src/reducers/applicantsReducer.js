const initialState = {
  applicants: []
};

const applicantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_GET_APPLICANTS':
      return Object.assign({}, state, {
        applicants: action.applicants
      });
    case 'PRE_GET_POS':
    case 'GET_POS_ERROR':
    default:
      return state;
  }
};

export default applicantsReducer;