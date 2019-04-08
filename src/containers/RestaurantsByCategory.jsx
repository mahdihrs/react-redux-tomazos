import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchRestosByCat } from '../store/actions/allRestaurantsByCategory'

class RestaurantsByCategory extends Component {
    componentDidMount() {
        this.props.fetchRestosByCat(this.props.match.params.catId)
    }

    render() {
        return (
        <div className="container my-5">
            {this.props.loading ?
                <img className="my-5" src="http://smartvaforu.com/wp-content/uploads/2018/09/preloader.gif" alt="fetching-data" />
                :
                <div>
                    <h1 className="mb-4" style={{textAlign: 'center'}}>Restaurants Filtered By Category {this.props.match.params.name}</h1>
                    <div className="row justify-content-between">{this.props.restos.map(e => {
                        return (
                            <div key={e.restaurant.id} className="col-md-4 my-3">
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={e.restaurant.thumb} className="card-img-top" alt={e.restaurant.name} />
                                    <div className="card-body" style={{minHeight: '122px', cursor: 'pointer'}}>
                                        <p className="card-title"><Link to={`/resto/${e.restaurant.id}`}>{e.restaurant.name}</Link></p>
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
        )
    }
}

const mapStateToProps = (state) => ({
    restos: state.restosByCategory.allRestos,
    loading: state.restosByCategory.loading,
    errors: state.restosByCategory.errors
})

const mapDispatchToProps = (dispatch) => ({
    fetchRestosByCat: (id) => dispatch(fetchRestosByCat(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsByCategory)