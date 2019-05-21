import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Routes from "./Routes";

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <Routes />
</Provider>, document.getElementById('root'));
registerServiceWorker();