import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'

class Navbar extends Component {
    state = {
        username: ''
    }

    render() {
        const navStyle = {
            // textAlign: 'center',
            // fontSize: '2em'
            backgroundColor: 'red !important',
        }

        return (
            <div style={{navStyle}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to={'/'} className="navbar-brand" href="#">North Jakarta Cuisines</Link>

                    {/* <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div> */}
                    {localStorage.getItem('username') ? <Logout /> : <Login />}
                </nav>
            </div>
        )
    }
}

export default Navbar