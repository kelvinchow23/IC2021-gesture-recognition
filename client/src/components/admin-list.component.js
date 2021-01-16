import React, {Component} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {CSVLink} from 'react-csv';

 export default class AdminList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: [],
            trainingData: [],
            showTable: false,
            currentStatus: '',
            currentUser: '',
        };
    }


    renderStatusList() {
        let uniqueStatus = this.state.profileData.map(user => user.status)
            .filter((value, index, self) => self.indexOf(value) === index);
        return uniqueStatus.map((status) => {
            return (
                <option value ={status}>{status}</option>
            )
        })
    }

    renderUserRequestList(selectStatus) {
            const newUserList = this.state.profileData.filter(item => item.status === selectStatus);
                return newUserList.map((user) => {
                    const {username} = user;
                    return (
                        <option value={username}>{username}</option>
                    )
                }
            )
    }

    renderAllUserList() {
        return this.state.profileData.map((user) => {
            const {username} = user;
            return(
                <option value={username}>{username}</option>
            )
        })
    }

    renderLogTable() {
        let username = this.state.currentUser;
        if (username !== '') {
            console.log(this.state.trainingData);
            console.log(this.state.trainingData.length !== 0);
            if (this.state.trainingData.length !== 0) {
                return (
                    <React.Fragment>
                        {<div className = 'row mb-3'>
                            <h4 className = 'col-9'>
                                User: {username}
                            </h4>
                            <Button variant = 'outline-primary' className = 'col-3'>
                                <CSVLink
                                    data = {this.state.trainingData}
                                    filename = {username + '-data.csv'}
                                >
                                    Download User Data
                                </CSVLink>
                            </Button>
                        </div>}
                        <Table>
                            <thead>
                                <tr>
                                    <th>Letter</th>
                                    <th>Time</th>
                                    <th className='truncate-table-data'>Data</th>
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
            } else {
                return (
                    <h4> {username} has no training data.  Please choose another user.</h4>
                )
            }
        }
    }

    getAllUsers() {
        axios.get(window.location.href + '/getAllUsers')
            .then(res => {
                if (res.data) {
                    this.setState({profileData: res.data});
                } else {
                    console.log('No users exist!');
                }
            });
    }

    getTrainingData(username) {
        axios.get(window.location.href+'/getTrainingData/'+username)
            .then(res => {
                if (res.data) {
                    this.setState({
                        trainingData : res.data,
                        currentUser: username,
                        showTable: true
                    }); 
                }
                this.renderLogTable();
            })
    }

    onUserSelect(e) {
        this.getTrainingData(e.target.value);
    }
    
    onRequestFilter(e) {
        this.setState({currentStatus: e.target.value})
        this.renderUserRequestList(e.target.value);
    }

    componentDidMount() {
        this.getAllUsers();
        //this.renderUserRequestList(this.state.currentStatus);
    }

    render() {
        return (
            <div>
                <h3>Admin Console</h3>
                <p>Click on a specific user to view their training data.</p>
                <div className='row'>
                    <Form className='col-3'>
                        <Form.Group controlId='userRequestSelect'>
                            <Form.Label>
                                <strong>Filter Users by Status:</strong>
                                <Form.Control as = 'select' onChange = {this.onRequestFilter.bind(this)}>
                                    <option hidden disabled selected value>Please Select Status...</option>
                                    {this.renderStatusList()}
                                </Form.Control>                            
                            </Form.Label>
                            <Form.Control as = 'select' multiple onChange={this.onUserSelect.bind(this)}>
                                {this.renderUserRequestList(this.state.currentStatus)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='userAllSelect'>
                            <Form.Label><strong>Select from All Users:</strong></Form.Label>
                            <Form.Control as='select' multiple onChange={this.onUserSelect.bind(this)}>
                                {this.renderAllUserList()}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <div className='col-9'>
                        {this.state.showTable && this.renderLogTable()}
                    </div>
                </div>
            </div>
        )
    }
 }