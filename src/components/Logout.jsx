import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../store/actions/userActions'

class Logout extends Component {
    logout = () => {
        localStorage.removeItem('email')
        // localStorage.removeItem('username')
        this.props.userLogout()
        this.props.history.push('/')
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={this.logout}>Logout</button>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => dispatch(userLogout())
})

export default connect(null, mapDispatchToProps)(withRouter(Logout))