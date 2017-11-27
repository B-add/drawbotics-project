import React from 'react';
import {Button, Col, Collection, CollectionItem, Modal, Row} from "react-materialize";

class AddApplicantModal extends React.Component {
  render() {
    const { trigger, applicants } = this.props;
    return (
      <Modal
        header='Add Applicant'
        trigger={ trigger }>
        <Row>
          <Col s={10} offset={'s1'}>
            <Collection>
              {applicants.map((applicant) =>
                <CollectionItem key={applicant._id}>{applicant.firstname} {applicant.name}</CollectionItem>)}
            </Collection>
          </Col>
        </Row>
      </Modal>
    )
  }
}

export default AddApplicantModal;