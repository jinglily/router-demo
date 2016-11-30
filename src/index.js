import React from 'react';
import {render} from 'react-dom';

import Routes from './routes.js';
import './main.css';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<Routes />,document.getElementById('root'));
