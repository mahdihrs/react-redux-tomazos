import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { someoneLogin } from '../store/actions/userActions'
import firebase, { facebook, google, github } from '../firebase/config'

class Login extends Component {
    state = {
        username: ''
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    loginGoogle = () => {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(token => {
            console.log(token)
            localStorage.setItem('email', token.additionalUserInfo.profile.email)
            this.props.someoneLogin(token.additionalUserInfo.profile.email)
            this.props.history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('username', this.state.username)
        this.props.someoneLogin(this.state.username)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="col-5 my-5 container">
                {/* <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h1 className="mb-5">Login Form</h1>
                        <label>Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Username" 
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                </form> */}
                <hr/>
                <button onClick={this.loginGoogle} className="btn btn-primary"><i className="fab fa-google"></i> Sign In by Google</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    someoneLogin: (email) => dispatch(someoneLogin(email))
})

export default connect(null, mapDispatchToProps)(withRouter(Login))