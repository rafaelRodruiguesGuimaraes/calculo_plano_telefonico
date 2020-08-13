import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import CalculateCallPrice from './pages/calculateCallPrice';

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/calculate" component={CalculateCallPrice} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;