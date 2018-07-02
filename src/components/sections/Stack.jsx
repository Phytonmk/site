import React from 'react';

const stack = 
[
  {
    title: 'UI',
    technologies: ['SASS', 'Pug (Jade)']
  },
  {
    title: 'Frontend',
    technologies: ['React', 'Redux']
  },
  {
    title: 'Backend',
    technologies: ['NodeJS', 'Go']
  }
];
const additionalStack = 
['Familiar with both SQL and NoSQL databases (mostly MySQL and Mongo)',
'Also have basic knowledge of C++ and Python'];

import StackBlock from './StackBlock.jsx';
class Stack extends React.Component {
  render() {
    const stackBlocks = stack.map((stackData, i) => 
      <StackBlock key={i} title={stackData.title} technologies={stackData.technologies}/>);
    const stackStrings = additionalStack.map((stackData, i) => 
      <div className="stack-string" key={i}>{stackData}</div>);
    return (
      <section id="stack-section">
        <h2>Current Stack</h2>
        <div className="stack-container">
          {stackBlocks}
        </div>
        {stackStrings}
      </section>
    );
  }
}
export default Stack;