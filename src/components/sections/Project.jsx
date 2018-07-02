import React from 'react';

class Project extends React.Component {
  render() {
    return (
      <a href={this.props.url} className="project-row">
        <span 
          className="project-icon"
          style={{backgroundPosition: `0px -${this.props.backroundYPosition}px`}}
        ></span>
        <span className="project-title">{this.props.children}</span>
      </a>
    );
  }
}
export default Project;