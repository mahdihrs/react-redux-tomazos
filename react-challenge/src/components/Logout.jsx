import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
    logout = () => {
        localStorage.removeItem('username')
        this.props.history.push('/')
    }

    render() {
        return (
            <button onClick={this.logout}>Logout</button>
        )
    }
}

export default withRouter(Logout)