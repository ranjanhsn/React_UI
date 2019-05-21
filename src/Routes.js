import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from './Pages/Login';
import Home from './Pages/Home';

export const history = createHistory();
//console.log('Router', history.location.pathname);
//var url=history.location.pathname

const Routes = () => (
    <Router history={history}>
        <div>
            <Route exact path='/' component={Login} />
            <Route path='/Home' component={Home} /> 
         

    

        </div>

    </Router>
);
export default Routes;

