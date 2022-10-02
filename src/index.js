
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import items from './content.js';

ReactDOM.render(<App items={items} />, document.getElementById('root'));
