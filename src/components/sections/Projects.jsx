import React from 'react';

const projects = [
  {
    spriteYCoords: 73 * 0,
    title: 'Rubbish bin of Hackatons\' and other projects',
    url: 'https//github.com/phytonmk'
  },
  {
    spriteYCoords: 73 * 1,
    title: 'This site sourse code',
    url: 'https//github.com/phytonmk/site'
  },
  {
    spriteYCoords: 73 * 2,
    title: 'Some fullstack JS project (will be published soon)',
    url: '#'
  },
  {
    spriteYCoords: 73 * 3,
    title: 'Some Golang project (will be published soon)',
    url: '#'
  },
  {
    spriteYCoords: 73 * 4,
    title: 'Some React Native project (will be published soon)',
    url: '#'
  },
]

import Project from './Project.jsx';
class Projects extends React.Component {
  render() {
    const projectsList = projects.map((project, i) => 
      <Project key={i} backroundYPosition={project.spriteYCoords} url={project.url}>{project.title}</Project>)
    return (
      <section id="projects-section">
        <h2>{'{How am I programming}'}</h2>
        <div className="project-container">{projectsList}</div>
      </section>
    );
  }
}
export default Projects;