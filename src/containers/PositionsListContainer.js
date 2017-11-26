import { connect } from 'react-redux';
import PositionsList from '../components/positionList/PositionsList';
import {addPosition, getPositions, deletePosition} from '../actions/positionsActions';

const mapStateToProps = (state = []) => {
  return {
    positions: state.positionsReducer.positions,
    positionsError: state.positionsReducer.positionsError,
    positionsLoading: state.positionsReducer.positionsLoading
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
    }
  }
};

const AnatExerciceListContainer = connect(mapStateToProps, mapDispatchToProps)(PositionsList);

export default AnatExerciceListContainer;
