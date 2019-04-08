import React, { Component } from 'react'
import Reviews from '../components/Reviews'
import { connect } from 'react-redux';
import { detailResto } from '../store/actions/actions'
import { getReviews } from '../store/actions/restoReviews'
require('dotenv').config()

class RestoDetail extends Component {
    componentDidMount() {
        this.props.fetchResto(this.props.match.params.id)
        this.props.getReviews(this.props.match.params.id)
    }

    setCurrency(num) {
        return `${num.toLocaleString()}`
    }

    render() {
        const { detail, location, rating } = this.props

        return (
            <div className="container my-5">
                {this.props.loading ? 
                    <img className="my-5" src="http://smartvaforu.com/wp-content/uploads/2018/09/preloader.gif" alt="fetching-data" />

                :

                <div>
                    <img src={detail.thumb} alt={detail.name}/>
                    <h4 className="my-3"><a href={detail.url}>{detail.name}</a></h4>
                    <div className="row">
                        <div className="col-6">
                            <h6>{location.locality}</h6>
                            {/* <h6>Average cost for two Rp {detail.average_cost_for_two}</h6> */}
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
                        {/* <p>{this.setCurrency(detail.average_cost_for_two)}</p> */}
                        <p>Rp {detail.average_cost_for_two.toLocaleString()}</p>
                    </div>
                    <div>
                        <h6>Cuisines</h6>
                        <p>{detail.cuisines}</p>
                    </div>
                    <hr/>
                    <div>
                        <Reviews />
                    </div>
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    detail: state.fetchRestoDetail.detail,
    location: state.fetchRestoDetail.location,
    rating: state.fetchRestoDetail.rating,
    loading: state.fetchRestoDetail.loading
})

const mapDispatchToProps = (dispatch) => ({
    fetchResto: (id) => dispatch(detailResto(id)),
    getReviews: (id) => dispatch(getReviews(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(RestoDetail);
