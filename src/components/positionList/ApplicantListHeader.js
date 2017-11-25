import React from 'react';
import { Col, Row } from "react-materialize";

class ApplicantListHeader extends React.Component {
  render() {
    return (
      <Row style={{
        marginBottom: 0
      }}>
        <Col s={6}>
          <p className={'header'}>Applicant</p>
        </Col>
        <Col s={4} offset={'s1'}>
          <p className={'header'}>
            Applicant's skills
          </p>
        </Col>
      </Row>
    )
  }
}

export default ApplicantListHeader;