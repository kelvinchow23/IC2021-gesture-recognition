import React, {Component} from 'react';
import axios from 'axios';

 export default class StatsList extends Component {
     constructor (props) {
         super(props);

         this.onChangeUsername = this.onChangeUsername.bind(this);
         this.onChangeScore = this.onChangeScore.bind(this);
         this.onChangeDescription = this.onChangeDescription.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

         this.state ={
             user: '',
             score: 0,
             description: '',
             userList: [],
         }
     }

     onChangeUsername(e) {
         this.setState({
             user: e.target.value,
         });
     }

     onChangeScore(e) {
        this.setState({
            score: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

     onSubmit(e) {
         e.preventDefault();

         const addUser = {
             user: this.state.user,
             score: this.state.score,
             description: this.state.description
         }

         console.log(window.location.href);
         console.log(window.location.hostname);

         axios.post(window.location.href, addUser)
            .then(res => console.log(res.data));
        
        this.setState({
            user: '',
            score: 0,
            description: ''
        })

         console.log(addUser);
     }

    render() {
        return (
            <div>
                <h3>Add new user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.user}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Score: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.score}
                            onChange={this.onChangeScore}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>

                    <div className ='form-group'>
                        <input type="submit" value = "Add user" className="btn btn-primary" />
                    </div>                  
                </form>
            </div>
        )
    }
 }