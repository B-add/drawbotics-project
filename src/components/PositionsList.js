import React from 'react';

class PositionsList extends React.Component {
  componentDidMount() {
    this.props.getPositions();
  }

  render() {
    const { positions, positionsError, positionsLoading } = this.props;
    console.log("pos", positions);
    return (
      <div>
        {positions.map((p) => <p>{p.title}</p>)}
      </div>
    )
  }
}

export default PositionsList;