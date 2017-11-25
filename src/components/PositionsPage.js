import React from 'react';
import PositionsListContainer from "../containers/PositionsListContainer";

class PositionsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Positions</h1>
        <PositionsListContainer />
      </div>
    )
  }
}

export default PositionsPage;