import React from 'react';
import {render} from 'react-dom';
import App from './components/common/App.js';
import 'normalize.css';
import './js/main.js';
import './styles/helper.scss';
import './styles/styles.scss';

render(<App />, document.getElementById('app'))