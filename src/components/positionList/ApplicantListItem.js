import React from 'react';
import { Button, Col, Row } from "react-materialize";
import SkillBadge from "../SkillBadge";
import {Link} from "react-router-dom";

class ApplicantListItem extends React.Component {
  render() {
    const { _id, name, firstname, skills, removeApplicant } = this.props;
    let skillCount = 0;
    return (
      <Row style={{
        marginBottom: 0
      }}>
        <Col s={5}>
          <Link to={"/candidate/" + _id}><p className={"center"}>{firstname} {name}</p></Link>
        </Col>
        <Col s={5}>
          {skills.length > 2 ? <SkillBadge key={0} skill={'...'}/> : null}
          {skills.map((skill) => skillCount++ < 2 ? <SkillBadge key={skillCount} skill={skill}/> : null)}
        </Col>
        <Col s={2} className={"center"}>
          <Button floating small className='red' waves='light' icon='clear' onClick={() => removeApplicant(_id)}/>
        </Col>
      </Row>
    )
  }
}

export default ApplicantListItem;