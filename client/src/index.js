import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
	// provider “provides” the store to its child components
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
);
