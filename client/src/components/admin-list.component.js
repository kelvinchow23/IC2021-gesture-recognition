import React, {Component} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const array = [{id:1, name:"test", username:"test", email:"test@test.com"},
{id:2, name:"Kelvin", username:"kthchow", email:"kelvin@test.com"},
{id:3, name:"admin", username:"admin", email:"admin@test.com"},
{id:4, name:"testuser", username:"testuser", email:"testuser@test.com"}
];


 export default class AdminList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: [],
            trainingData: [],
            showTable: false
        };
    }

    renderUserRequestList() {
        return this.state.profileData.map((user) => {
            const {username} = user;
            return(
                <option value={username}>{username}</option>
            )
        })
    }

    renderUserList() {
        return this.state.profileData.map((user) => {
            const {username} = user;
            return(
                <option value={username}>{username}</option>
            )
        })
    }

    downloadData() {
        alert('TODO: download CSV data');
    }

    renderLogTable(username) {
        console.log(username);
        return (
            <React.Fragment>
                {<div>
                    <p>User: {username} </p><Button onClick={this.downloadData.bind(this)}>Download CSV</Button>
                </div>}
                <Table className ='col-9'>
                    <thead>
                        <tr>
                            <th>Letter</th>
                            <th>Time</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trainingData.map(training => {
                            return(
                                <tr>
                                    <td>{training.letter}</td>
                                    <td>{training.datetime}</td>
                                    <td className='truncate-table-data'>{training.data}</td>
                                </tr>
                        )})}
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }

    getAllUsers() {
        axios.get(window.location.href + '/getAllUsers')
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                } else {
                    console.log('No users exist!');
                }
            });
    }

    getTrainingData(username) {
        axios.get(window.location.href+'/getTrainingData/'+username)
            .then(res => {
                if (res.data) {
                    console.log(res.data);   
                    this.setState({
                        trainingData : res.data,
                        showTable: true
                    }); 
                }
                this.renderLogTable(username);
            })
    }

    onUserSelect(e) {
        this.getTrainingData(e.target.value);
    }

    sayhello(user) {
        alert('hello '+ user);
    }

    componentDidMount() {
        this.setState({
            profileData: array
        })
    }

    render() {
        return (
            <div>
                <p>Things to do: get users: 1) Training Requests 2) Get all users 3)Get table of all user data from selected user</p>
                <h3>Admin Console</h3>
                <h4>User Training Requests</h4>
                <h4>User Data Explorer</h4>
                <p>Click on a specific user to view their training data.  For now, testuser has training data</p>
                <div className='row'>
                    <Form className='col-2'>
                        <Form.Group controlId='userSelect'>
                            <Form.Label>Select User:</Form.Label>
                            <Form.Control as='select' multiple onChange={this.onUserSelect.bind(this)}>
                                {this.renderUserList()}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='userRequestSelect'>
                            <Form.Label>Users with Request:</Form.Label>
                            <Form.Control as='select' multiple onChange={this.onUserSelect.bind(this)}>
                                {this.renderUserRequestList()}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <div className='col-9 offset-1'>
                        {this.state.showTable && this.renderLogTable()}
                    </div>
                </div>
            </div>
        )
    }
 }