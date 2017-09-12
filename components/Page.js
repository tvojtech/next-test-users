import React from 'react';

export default WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <div style={{backgroundColor: 'white'}}>
          <header style={{padding: '1.5rem', backgroundColor: 'grey', color: 'white'}}>
            Header
          </header>
          <div style={{padding: '1rem'}}>
            <WrappedComponent {...this.props} />
          </div>
          <footer style={{padding: '1.5rem', backgroundColor: 'grey', color: 'white'}}>
            Footer
          </footer>
        </div>
      );
    }
  };
