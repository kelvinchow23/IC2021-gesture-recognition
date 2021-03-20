import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/my-navbar.component";
import DashboardList from "./components/dashboard-list.component";
import TrainingList from "./components/training-list.component";
import SettingsList from "./components/settings-list.component";
import MarketplaceList from "./components/marketplace-list.component";
import CommunityList from "./components/community-list.component";
import LoginList from "./components/login-list.component";
import SignupList from "./components/signup-list.component";
import AdminList from "./components/admin-list.component";
import VisionList from "./components/vision-list.component";

 export default class App extends Component {
    render() {
        return (
            <div className = "container">
                <Router>
                    <MyNavbar />
                    <br/>
                    <Route path ="/" exact component={DashboardList} />
                    <Route path ="/training" exact component={TrainingList} />
                    <Route path ="/settings" exact component={SettingsList} />
                    <Route path ="/marketplace" exact component={MarketplaceList} />
                    <Route path ="/community" exact component={CommunityList} />
                    <Route path ="/vision" exact component={VisionList} />
                    <Route path ="/admin" exact component={AdminList} />
                    <Route path ="/login" exact component={LoginList} />
                    <Route path ="/signup" exact component={SignupList} />
                </Router>    
            </div>
        )
    }
 }