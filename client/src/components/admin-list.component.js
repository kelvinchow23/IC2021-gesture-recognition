import React, {Component} from 'react';
import axios from 'axios';


 export default class AdminList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getAllUsers() {
        axios.get(window.location.href + '/getAllUsers')
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    console.log(res.data.length);
                } else {
                    console.log('No users exist!');
                }
            });
    }

    getUserData(username) {

    }

    componentDidMount() {
        this.getAllUsers();
    }

    render() {
        return (
            <div>
                <p>Things to do: get users: 1) Training Requests 2) Get all users 3)Get table of all user data from selected user</p>
                <h3>Admin Console</h3>
                <h4>User Training Requests</h4>
                <h4>User Data Explorer</h4>

            </div>
        )
    }
 }