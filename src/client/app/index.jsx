
import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

render(<App/>, document.getElementById('app'));

        
