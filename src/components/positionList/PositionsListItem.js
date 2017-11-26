import React from 'react';
import {Col, Row, Badge, Button} from "react-materialize";
import SkillBadge from "../SkillBadge";

class PositionsListItem extends React.Component {
  render() {
    const { _id, title, applicants, skills, deletePosition } = this.props;
    let skillCount = 0;
    return (
      <Row style={{
        marginBottom: 0
      }}>
        <Col s={3} offset={'s1'}>
          <p>{title}</p>
        </Col>
        <Col s={4} offset={'s1'}>
          <p>
            {skills.length > 3 ? <SkillBadge key={0} skill={'...'}/> : null}
            {skills.map((skill) => skillCount++ < 3 ? <SkillBadge key={skillCount} skill={skill}/> : null)}
          </p>
        </Col>
        <Col s={2}>
          <p><Badge>{applicants.length} Applicants</Badge></p>
        </Col>
        <Col s={1}>
          <p style={{ textAlign: "center" }}><Button onClick={() => deletePosition(_id)} floating small={"true"} className='red delete-pos' waves='light' icon='clear' /></p>
        </Col>
      </Row>
    )
  }
}

export default PositionsListItem;