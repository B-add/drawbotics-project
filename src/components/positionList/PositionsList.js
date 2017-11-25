import React from 'react';
import {Col, Collapsible, CollapsibleItem, Row} from "react-materialize";
import PositionsListItem from "./PositionsListItem";
import PositionsListItemDetail from "./PositionsListItemDetail";

class PositionsList extends React.Component {
  componentDidMount() {
    this.props.getPositions();
  }

  render() {
    const { positions } = this.props;
    return (
      <Row>
        <Col s={10} offset={'s1'}>
          <Collapsible>
            {positions.map((position) => <CollapsibleItem key={position._id} header={<PositionsListItem {...position} />}>
              <PositionsListItemDetail {...position} />
            </CollapsibleItem>)}
          </Collapsible>
        </Col>
      </Row>
    )
  }
}

export default PositionsList;