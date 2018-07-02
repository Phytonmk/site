import React from 'react';

class Name extends React.Component {
  render() {
    let age = 18;
    const computed = (new Date().getTime() - new Date('05/29/2000').getTime()) / (60 * 60 * 24 * 365 * 1000);
    if (computed > age)
      age = Math.floor(computed);
    return (
      <section id="name-section">
        <h1>Mikhail Kryuchkov</h1>
        <h2>
          fullstack JS developer
          <br />
          <span className="sub-text">
            {age} y.o. Saint-Petersburg, Russia
          </span>
        </h2>
      </section>
    );
  }
}
export default Name;