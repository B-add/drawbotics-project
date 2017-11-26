import React from 'react';
import { Button, Col, Modal, Row} from "react-materialize";
import { Control, Form } from 'react-redux-form';
import {mapProps, TextArea, TextInput} from "react-redux-form-materialize";

class AddPositionModal extends React.Component {
  render() {
    return (
      <Modal
        header='Add Position'
        trigger={ this.props.trigger }>
        <Form model="form.positionForm" onSubmit={(position) => console.log(position)}>
          <Row>
            <Col s={4} offset={'s2'}>

              <Control.text type="text" name="positionTitle" placeholder="Title" model="form.positionForm.title"
                            component={TextInput} mapProps={mapProps} required/>
            </Col>
            <Col s={8} offset={'s2'}>
              <Control.text name="description" placeholder="Position Description" model="form.positionForm.description"
                            component={TextArea} mapProps={mapProps}/>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }} s={4} offset={'s4'}>
              <Button waves='light'>Add Position</Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    )
  }
}

export default AddPositionModal;