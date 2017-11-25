import React from 'react';
import { Col, Collection, CollectionItem, Row } from "react-materialize";
import ApplicantListItem from "./ApplicantListItem";
import ApplicantListHeader from "./ApplicantListHeader";
import AddSkillToPositionBadgeContainer from "../../containers/AddSkillToPositionBadgeContainer";
import RemoveSkillFromPositionBadgeContainer from "../../containers/RemoveSkillFromPositionBadgeContainer";

class PositionsListItemDetail extends React.Component {
  render() {
    const { _id, description, applicants, skills } = this.props;
    return (
      <Row>
        <Col s={12}>
          <Row>
            <Col s={5} offset={'s1'}>
              <Row>
                <Col s={10} offset={'s1'}>
                  <p className={'header'}>
                    Subject:
                  </p>
                  <p>
                    {description}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col s={2} offset={'s1'}>
                  <p className={'header'}>
                    Required Skills:
                  </p>
                </Col>
                <Col s={7} offset={'s1'}>
                  <p>
                    <AddSkillToPositionBadgeContainer positionId={_id}/>
                    {skills.map((skill) =>
                      <RemoveSkillFromPositionBadgeContainer key={skill} skill={skill} positionId={_id}/>
                    )}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col s={6}>
              <Collection header={<ApplicantListHeader />}>
                {applicants.map((applicant) =>
                  <CollectionItem key={applicant._id} href={"/candidate/" + applicant._id}>
                    <ApplicantListItem {...applicant} />
                  </CollectionItem>
                )}
              </Collection>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default PositionsListItemDetail;