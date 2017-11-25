import { connect } from 'react-redux';
import { addSkillToPosition } from '../actions/positionsActions';
import AddSkillBadge from "../components/AddSkillBadge";

const mapStateToProps = (state = []) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addSkill: (skillName) => {
      return dispatch(addSkillToPosition(ownProps.positionId, skillName));
    }
  }
};

const AddSkillToPositionBadgeContainer = connect(mapStateToProps, mapDispatchToProps)(AddSkillBadge);

export default AddSkillToPositionBadgeContainer;
