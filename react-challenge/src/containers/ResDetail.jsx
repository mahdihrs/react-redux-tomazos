import React, { Component } from 'react'
import api from '../api/api'
require('dotenv').config()

class RestoDetail extends Component {
    state = {
        resto: {},
        location: {},
        rating: {}
    }

    componentDidMount() {
        this.fetchResto()
    }

    fetchResto() {
        api({
            url: `/restaurant?res_id=${this.props.match.params.id}`,
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'user-key': `${process.env.REACT_APP_ZOMATOS}`
            }            
        })
        .then(({data}) => {
            this.setState({
                resto: data,
                location: data.location,
                rating: data.user_rating
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    setCurrency(num) {
        return `${num.toLocaleString()}`
    }

    render() {
        const { resto, location, rating } = this.state

        return (
            <div className="container my-5">
                <img src={resto.thumb} alt={resto.name}/>
                <h4 className="my-3"><a href={resto.url}>{resto.name}</a></h4>
                <div className="row">
                    <div className="col-6">
                        <h6>{location.locality}</h6>
                        {/* <h6>Average cost for two Rp {resto.average_cost_for_two}</h6> */}
                    </div>
                    <div className="col-6">
                        <h6>Rating {rating.aggregate_rating} from {rating.votes} votes</h6>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h6>Address:</h6>
                    <p>{location.address}</p>
                </div>
                <div>
                    <h6>Average Cost for Two:</h6>
                    {/* <p>{this.setCurrency(resto.average_cost_for_two)}</p> */}
                    <p>{resto.average_cost_for_two}</p>
                </div>
                <div>
                    <h6>Cuisines</h6>
                    <p>{resto.cuisines}</p>
                </div>
            </div>
        )
    }
}

export default RestoDetail;
