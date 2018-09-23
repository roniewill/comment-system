import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { base, auth } from './Base';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App base={ base } auth={ auth } />, document.getElementById('root'));
registerServiceWorker();
