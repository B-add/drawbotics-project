import { connect } from 'react-redux';
import { removeSkillFromPosition } from '../actions/positionsActions';
import SkillBadge from "../components/SkillBadge";

const mapStateToProps = (state = []) => {
  return {
    canBeRemoved: true
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeSkill: (skillName) => {
      return dispatch(removeSkillFromPosition(ownProps.positionId, skillName));
    }
  }
};

const RemoveSkillFromPositionBadgeContainer = connect(mapStateToProps, mapDispatchToProps)(SkillBadge);

export default RemoveSkillFromPositionBadgeContainer;
