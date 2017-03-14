import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

console.log("app started!!");
const store = configureStore();
const {dispatch} = store;

render(<Root store={store} />,document.getElementById('root'));
