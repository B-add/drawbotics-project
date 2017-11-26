import {getAllApplicantsWS} from "../dataAccess/ApplicantDA";

const preGetAllApplicants = () => {
  return {
    type: 'PRE_GET_APPLICANTS'
  }
};

const postGetAllApplicants = (response) => {
  if (response.status === 200 || response.status === 304) {
    return {
      type: 'POST_GET_APPLICANTS',
      applicants: response.data
    }
  } else {
    return {
      type: 'GET_APPLICANTS_ERROR',
      message: response.message
    }
  }
};

export const getAllApplicants = () => {
  return dispatch => {
    dispatch(preGetAllApplicants());
    return getAllApplicantsWS()
      .then(response => dispatch(postGetAllApplicants(response)))
      .catch(error => dispatch(postGetAllApplicants(error)));
  }
};
