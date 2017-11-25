import React from 'react';
import { Col, Collection, CollectionItem, Row } from "react-materialize";
import PositionsListItem from "./PositionsListItem";

class PositionsList extends React.Component {
  componentDidMount() {
    this.props.getPositions();
  }

  render() {
    const { positions, positionsError, positionsLoading } = this.props;
    return (
      <Row>
        <Col s={10} offset={'s1'}>
          <Collection>
            {positions.map((position) => <CollectionItem key={position._id}>
              <PositionsListItem {...position} />
            </CollectionItem>)}
          </Collection>
        </Col>
      </Row>
    )
  }
}

export default PositionsList;