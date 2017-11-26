import React from 'react';
import {Button, Col, Row} from "react-materialize";

class ApplicantListHeader extends React.Component {
  render() {
    return (
      <Row style={{
        marginBottom: 0
      }}>
        <Col s={5}>
          <p className={'header center'}>Applicant</p>
        </Col>
        <Col s={5}>
          <p className={'header center'}>
            Applicant's skills
          </p>
        </Col>
        <Col s={2} className={"center"}>
          <Button floating small={"true"} className='blue' waves='light' icon='add' />
        </Col>
      </Row>
    )
  }
}

export default ApplicantListHeader;