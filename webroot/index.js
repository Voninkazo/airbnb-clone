import React from 'react';
import ReactDOM from 'react-dom';
import Airbnb from './components/Airbnb';


class Main extends React.Component {
  render() {
    return (
          <Airbnb/>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));