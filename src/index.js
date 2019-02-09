import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Header from './components/Header';

import './scss/app.scss';

const App = props => (
  <React.Fragment>
    <Header />
    <div className="container">
      <h1>{props.name}</h1>
      <h5>MODE in {process.env.NODE_ENV}</h5>
    </div>
  </React.Fragment>
);

App.propTypes = {
  name: PropTypes.string.isRequired,
};

function renderApp() {
  render(<App name="React + Parcel" />, document.getElementById('root'));
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
