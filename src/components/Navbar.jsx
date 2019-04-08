import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import Login from './Login'
import Logout from './Logout'
import { connect } from 'react-redux'

class Navbar extends Component {
    render() {
        const navStyle = {
            backgroundColor: 'red !important',
        }

        return (
            <div style={{navStyle}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div>
                        <Link to={'/'} className="navbar-brand" href="#">Tomazos</Link>
                    </div>
                    <div>
                        
                    </div>
                    <div className="ml-5">
                        {this.props.isLogin ? <Logout /> : <Link to={'/login'} className="btn btn-primary">Login</Link> }
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.userBucket.isLogin,
    user: state.userBucket.whosLogin
})

export default connect(mapStateToProps, null)(Navbar)