import React from 'react';
import {Button, Col, Row} from "react-materialize";
import SkillBadge from "../SkillBadge";

class ApplicantListItem extends React.Component {
  render() {
    const { name, firstname, skills } = this.props;
    let skillCount = 0;
    return (
      <Row style={{
        marginBottom: 0
      }}>
        <Col s={5}>
          <p className={"center"}>{firstname} {name}</p>
        </Col>
        <Col s={5}>
          {skills.length > 2 ? <SkillBadge key={0} skill={'...'}/> : null}
          {skills.map((skill) => skillCount++ < 2 ? <SkillBadge key={skillCount} skill={skill}/> : null)}
        </Col>
        <Col s={2} className={"center"}>
          <Button floating small className='red' waves='light' icon='clear' />
        </Col>
      </Row>
    )
  }
}

export default ApplicantListItem;