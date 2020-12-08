import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import DashboardList from "./components/dashboard-list.component";
import TrainingList from "./components/training-list.component";
import StatsList from "./components/stats-list.component";
import SettingsList from "./components/settings-list.component";



function App() {
    return (
        <Router>
        <div className="container">
            <Navbar />
            <br/>
            <Route path ="/" exact component={DashboardList} />
            <Route path ="/training" exact component={TrainingList} />
            <Route path ="/stats" exact component={StatsList} />
            <Route path ="/settings" exact component={SettingsList} />
        </div>
        </Router>
    )
}

export default App;