import React from 'react';
import { Badge } from "react-materialize";

class SkillBadge extends React.Component {
  render() {
    return (
      <p><Badge data-badge-caption={''} newIcon>{this.props.skill}</Badge></p>
    )
  }
}

export default SkillBadge;