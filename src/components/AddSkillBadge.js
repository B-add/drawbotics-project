import React from 'react';
import {Badge, Button, Col, Modal, Row} from "react-materialize";
import { Control, Form } from 'react-redux-form';

class AddSkillBadge extends React.Component {
  render() {
    return (
      <Modal
        header='Add application skill'
        trigger={
          <Badge data-badge-caption={''}
                 className={"green add-skill"}
                 newIcon>+ skill</Badge>
        }>
        <Form model="form.skillForm" onSubmit={(skill) => console.log(skill)}>
          <Row>
            <Col s={4} offset={'s4'}>
              <Control.text
                name="skillName" placeholder="Skill" model="form.skillForm.skillName" required />
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }} s={4} offset={'s4'}>
              <Button waves='light'>Add Skill</Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    )
  }
}

export default AddSkillBadge;