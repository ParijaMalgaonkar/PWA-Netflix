import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.js';
import registerSW from './swRegistration';


ReactDOM.render(<App />, document.getElementById('root'));

registerSW();