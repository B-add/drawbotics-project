import { connect } from 'react-redux';
import { removeApplicantFromPosition } from '../actions/positionsActions';
import PositionsListItemDetail from "../components/positionList/PositionsListItemDetail";

const mapStateToProps = (state = []) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeApplicant: (applicantId) => {
      return dispatch(removeApplicantFromPosition(ownProps._id, applicantId));
    }
  }
};

const PositionsListItemDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PositionsListItemDetail);

export default PositionsListItemDetailContainer;
