import React from 'react';
import ReactDOM from 'react-dom';
import Application from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Store from './config/create-store'

const rootEl = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <Component store={Store} />
    ,rootEl,
  );
};

render(Application);


// ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
