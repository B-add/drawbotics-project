import { connect } from 'react-redux';
import PositionsList from '../components/positionList/PositionsList';
import {addPosition, getPositions, deletePosition} from '../actions/positionsActions';
import {getAllApplicants} from "../actions/applicantsActions";

const mapStateToProps = (state = []) => {
  return {
    positions: state.positionsReducer.positions,
    positionsError: state.positionsReducer.positionsError,
    positionsLoading: state.positionsReducer.positionsLoading,
    allApplicants: state.applicantsReducer.applicants
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPositions: () => {
      return dispatch(getPositions());
    },
    addPosition: (position) => {
      return dispatch(addPosition(position));
    },
    deletePosition: (positionId) => {
      return dispatch(deletePosition(positionId));
    },
    getAllApplicants: () => {
      return dispatch(getAllApplicants());
    },
  }
};

const AnatExerciceListContainer = connect(mapStateToProps, mapDispatchToProps)(PositionsList);

export default AnatExerciceListContainer;
