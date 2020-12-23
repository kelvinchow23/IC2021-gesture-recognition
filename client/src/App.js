import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/my-navbar.component";
import DashboardList from "./components/dashboard-list.component";
import TrainingList from "./components/training-list.component";
import StatsList from "./components/stats-list.component";
import SettingsList from "./components/settings-list.component";
import LoginList from "./components/login-list.component";
import SignupList from "./components/signup-list.component";

 export default class App extends Component {
    render() {
        return (
            <div className = "container">
                <Router>
                    <MyNavbar />
                    <br/>
                    <Route path ="/" exact component={DashboardList} />
                    <Route path ="/training" exact component={TrainingList} />
                    <Route path ="/stats" exact component={StatsList} />
                    <Route path ="/settings" exact component={SettingsList} />
                    <Route path ="/login" exact component={LoginList} />
                    <Route path ="/signup" exact component={SignupList} />
                </Router>    
            </div>
        )
    }
 }