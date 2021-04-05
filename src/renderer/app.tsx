import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

import List from './components/List';

const Root: React.FC = () => (
    <div>
        <h1 className="greeting">Welcome wasmake!</h1>
        <List/>
    </div>
)

ReactDOM.render(
    <Root />,
    document.getElementById("app"),
)