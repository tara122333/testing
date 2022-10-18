import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tara from './components/User';
import Chand from './components/ClassConcept';

import {BrowserRouter} from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    {/* <Tara name="Tara" description="This is Good Boy" />
    <Chand name="Tarush" description="This is chutiya boy " /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
