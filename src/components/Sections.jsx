import React from 'react';

import Name from './sections/Name.jsx'; 
import Stack from './sections/Stack.jsx'; 
import Projects from './sections/Projects.jsx'; 
import Person from './sections/Person.jsx'; 
import Messenger from './sections/Messenger.jsx'; 

class Sections extends React.Component {
  render() {
    return (
      <main>
        <Name />
        <Stack />
        <Projects />
        <Person />
        <Messenger />
      </main>
    );
  }
}
export default Sections;