import React from 'react';
import ReactDOM from 'react-dom';
import Airbnb from './components/Airbnb';


class Main extends React.Component {
  render() {
    return (
    <div className="container">
        <h1 className="title">Stays in Finland</h1>
        <div>
            <Airbnb/>
        </div>
    </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));