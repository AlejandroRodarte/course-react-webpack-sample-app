import React from 'react';
import { Link, Route } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent/asyncComponent';

import User from './containers/Users';

const AsyncPizza = asyncComponent(() => import('./containers/Pizza'));

const App = () => (
    <div>

        <div>
            <Link to="/">
                Users
            </Link>
            <Link to="/">
                Pizza
            </Link>
        </div>

        <div>
            <Route
                path="/"
                component={ User }
                exact
            />
            <Route
                path="/pizza"
                component={ AsyncPizza }
                exact
            />
        </div>

    </div>
);

export default App;
