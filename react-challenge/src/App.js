import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import './App.css';
import Navbar from './components/Navbar'
import api from './api/api'
import Home from './containers/Home'
import Dummy from '../src/dummydata'
import RestoDetail from './containers/ResDetail'
require('dotenv').config()

class App extends Component {
    state = {
        bestRestos: []
    }
    
    render() {
        return (
        <div className="App">
            {/* <Home restos={this.state.bestRestos} /> */}
            <Router>
                <Navbar className="mb-5" />
                <Switch>
                    <Route exact path="/" component={ () => <Home restos={this.state.bestRestos} /> } />
                    {/* <Route path="/:id" component={ (props) => <h2>{JSON.stringify(props.match.params.id)}</h2>} /> */}
                    <PrivateRoute path="/resto/:id" component={RestoDetail} />
                </Switch>
            </Router>
        </div>
        );
    }

    fetchJakSelRestos() {
        api({
            // url: `/location_details?entity_id=74004&entity_type=zone`, //Jaksel
            url: `/location_details?entity_id=74003&entity_type=zone`, //Jakut
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'user-key': `${process.env.REACT_APP_ZOMATOS}`
            }
        })
        .then(({data}) => {
            console.log(data.best_rated_restaurant)
            this.setState({
                bestRestos: data.best_rated_restaurant
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        this.fetchJakSelRestos()
    }
}

export default App;
