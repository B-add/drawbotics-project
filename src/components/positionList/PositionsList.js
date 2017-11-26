import React from 'react';
import {Button, Col, Collapsible, CollapsibleItem, Row} from "react-materialize";
import PositionsListItem from "./PositionsListItem";
import PositionsListItemDetailContainer from "../../containers/PositionsListItemDetailContainer";

class PositionsList extends React.Component {
  componentDidMount() {
    this.props.getPositions();
  }

  render() {
    const { positions } = this.props;
    return (
      <div>
        <Row>
          <Col s={4} offset={'s2'}>
            <h1 style={{
              marginBottom: 0
            }}>
              Positions
            </h1>
          </Col>
          <Col s={1} offset={'s3'}>
              <Button floating large className='red' waves='light' icon='add' style={{
                marginTop: '2.1rem'
              }}/>
          </Col>
        </Row>
        <Row>
          <Col s={10} offset={'s1'}>
            <Collapsible>
              {positions.map((position) => <CollapsibleItem key={position._id} header={<PositionsListItem {...position} />}>
                <PositionsListItemDetailContainer {...position} />
              </CollapsibleItem>)}
            </Collapsible>
          </Col>
        </Row>

      </div>
    )
  }
}

export default PositionsList;