import React from 'react';

class StackBlock extends React.Component {
  render() {
    const technologiesList = this.props.technologies.map((technology, i) => 
      <li key={i}>{technology}</li>)
    return (
          <div className="stack-block">
            <h3>{this.props.title}</h3>
            <ul>{technologiesList}</ul>
          </div>
    );
  }
}
export default StackBlock;