import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from './collapse';
import Input from './input';
import "../styles/app.scss";

import "font-awesome-loader";

ReactDOM.render(<Collapse />, document.getElementById('collapse'));
ReactDOM.render(<Input />, document.getElementById('input'));