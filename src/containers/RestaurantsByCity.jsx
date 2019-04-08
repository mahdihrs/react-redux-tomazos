import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetch } from '../store/actions/restoListByLoc'

class RestaurantsByCity extends Component {
    componentDidMount() {
        this.props.fetch(this.props.match.params.entity_id)
    }

    render() {
        return (
            <div>
                <div className="container my-5">
                    {this.props.loading ?
                        <img className="my-5" src="http://smartvaforu.com/wp-content/uploads/2018/09/preloader.gif" alt="fetching-data" />
                        :
                        <div>
                            <h3>Restaurants in {this.props.match.params.loc}</h3>
                            <p>Total Restaurants in this location: {this.props.num_restaurants}</p>
                            <p>Top Cuisines: {this.props.top_cuisines.join(', ')}</p>
                            <div className="row justify-content-between">{this.props.best_rated_restaurants.map(e => {
                                return (
                                    <div key={e.restaurant.id} className="col-md-4 my-3">
                                        <div className="card" style={{width: '18rem'}}>
                                            <img src={e.restaurant.thumb} className="card-img-top" alt={e.restaurant.name} />
                                            <div className="card-body" style={{ minHeight: '122px', cursor: 'pointer' }}>
                                                <h5 className="card-title"><Link to={`/resto/${e.restaurant.id}`}>{e.restaurant.name}</Link></h5>
                                                <small className="card-text"><Link to={`/resto/${e.restaurant.id}`}>{e.restaurant.location.locality_verbose}</Link></small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    num_restaurants: state.restosByCity.num_restaurants,
    top_cuisines: state.restosByCity.top_cuisines,
    best_rated_restaurants: state.restosByCity.best_rated_restaurants,
    loading: state.restosByCity.loading
})

const mapDispatchToProps = (dispatch) => ({
    fetch: (entity_id) => dispatch(fetch(entity_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsByCity)
