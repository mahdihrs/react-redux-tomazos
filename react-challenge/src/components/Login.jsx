import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    state = {
        username: ''
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('username', this.state.username)
        this.setState({
            email: ''
        })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Username</label> */}
                    <input  type="text" 
                            className="form-control"
                            placeholder="Enter Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            >
                    </input>
                    {/* <span><button type="submit" className="btn btn-sm btn-primary">Login</button></span> */}
                </form>
            </div>
        )
    }
}

export default withRouter(Login)