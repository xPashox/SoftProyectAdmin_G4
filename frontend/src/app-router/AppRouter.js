import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from "../components/login/Login";
import RAppBar from "../components/navigation/RAppBar/RAppBar";
import RDrawer from "../components/navigation/RDrawer/RDrawer";
import RouterFacade from "./RouterFacade";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/home">
                    <RAppBar />
                    <Route
                        path="/home/:section"
                        render={renderProps => {
                            if (sessionStorage.getItem('logged')) {
                                return 
                            } else {
                                return <MainBox>
                                    <RouterFacade route={renderProps.match.params.section} />
                                </MainBox>

                            }
                        }}
                    />
                    <RDrawer />
                </Route>
            </Switch>
        </Router>
    )
}

class MainBox extends Component {
    render() {
        return (
            <div className="main-box">
                {this.props.children}
            </div>
        );
    }
}