import React from 'react';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import {routes} from "./routes"

const Routes = () => (
    <Router>
        <Switch>
            {routes?.map((props) => {
                const {path, Layout, Component,...rest} = props;
                return <Route
                    key={path}
                    path={path}
                    render={props => <Layout {...rest}><Component {...rest}/></Layout>}
                />
            })}
        </Switch>
    </Router>
);

export default Routes
