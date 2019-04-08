import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import './App.css';
import Navbar from './components/Navbar'

//
import Home from './containers/Home'
import RestoDetail from './containers/ResDetail'
import Login from './components/Login'
import Categories from './components/Categories'
import RestaurantsByCategory from './containers/RestaurantsByCategory'
import Cities from './components/Cities'
import ResByCity from './containers/RestaurantsByCity'

//store
import { Provider } from 'react-redux'
import store from './store/index'

require('dotenv').config()

class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <div className="App">
                {/* <Home restos={this.state.bestRestos} /> */}
                <Router>
                    <Navbar className="mb-5" />
                    <Switch>
                        <Route exact path="/" component={ () => <Home /> } />
                        <Route exact path="/login" component={ () => <Login /> } />
                        <Route exact path="/categories/:name/restaurants/:catId" component={RestaurantsByCategory} />
                        <Route exact path="/resto/:loc/:entity_id" component={ResByCity} />
                        <PrivateRoute path="/resto/:id" component={RestoDetail} />
                        <Route path="" component={ () => <h2>404 NOT FOUND</h2>}/>
                    </Switch>
                </Router>
            </div>
        </Provider>
        );
    }
}

export default App;
