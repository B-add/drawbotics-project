import { connect } from 'react-redux';
import PositionsList from '../components/positionList/PositionsList';
import { getPositions } from '../actions/positionsActions';

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
    }
  }
};

const AnatExerciceListContainer = connect(mapStateToProps, mapDispatchToProps)(PositionsList);

export default AnatExerciceListContainer;
