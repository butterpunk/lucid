import React from 'react';
import ReactDOM from 'react-dom';
import  App  from './client/App/index.js';
import store from './store';
import { Provider } from "react-redux";
const render = () => {
    ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>), 
        document.getElementById('root'));
}

store.subscribe(render);
render();