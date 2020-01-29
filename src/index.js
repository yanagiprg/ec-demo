import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(fab, fas, far);

ReactDOM.render(
  <BrowserRouter>
    < App />
  </BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();
