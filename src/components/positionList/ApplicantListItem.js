import React from 'react';
import { Col, Row } from "react-materialize";
import SkillBadge from "../SkillBadge";

class ApplicantListItem extends React.Component {
  render() {
    const { _id, name, firstname, skills } = this.props;
    let skillCount = 0;
    return (
      <Row style={{
        marginBottom: 0
      }}>
        <Col s={6}>
          <p>{firstname} {name}</p>
        </Col>
        <Col s={4} offset={'s1'}>
          <p>
            {skills.length > 2 ? <SkillBadge skill={'...'}/> : null}
            {skills.map((skill) => skillCount++ < 2 ? <SkillBadge skill={skill}/> : null)}
          </p>
        </Col>
      </Row>
    )
  }
}

export default ApplicantListItem;