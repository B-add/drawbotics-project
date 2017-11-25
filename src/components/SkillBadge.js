import React from 'react';
import { Badge } from "react-materialize";

class SkillBadge extends React.Component {
  render() {
    const { canBeRemoved, skill, removeSkill } = this.props;
    return (
      <Badge data-badge-caption={''} newIcon>
        {skill}  { canBeRemoved ? <span className={"cross"} onClick={() => removeSkill(skill)}>x</span> : null }
      </Badge>
    )
  }
}

export default SkillBadge;