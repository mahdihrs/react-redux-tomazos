import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { getReviews } from '../store/actions/restoReviews'

class reviews extends Component {

  render() {
    return (
      <div>
          {this.props.loading ? 
              <h1>Fetching reviews ...</h1>
            :

            <div className="container col-8">{this.props.reviews.map(e => {
                return (
                  <div key={e.id} className="my-5">
                    <div className="row">
                        <div className="col-2">
                            <img style={{maxHeight: '65px', maxWidth: '65px', borderRadius: '50%'}} src={e.user.profile_image} alt=""/>
                        </div>
                        <div className="ml-5 col-8" style={{textAlign: 'right'}}>
                            <small><strong>{e.user.name}</strong></small> <br/>
                            <small>Foodie Level: {e.user.foodie_level}</small>
                        </div>
                    </div>
                    <div className="mt-3" style={{textAlign: 'left'}}>
                      <div>
                        <small>{e.review_time_friendly}</small>
                      </div>
                      <div>
                        <p>Ternilai: <span style={{backgroundColor: "#" + e.rating_color, color: '#fff'}}><strong>{e.rating}.0</strong></span> <span className="ml-3">{e.review_text}</span></p>
                      </div>
                    </div>
                </div>
                )
            })}
            </div>
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    reviews: state.restoReviews.reviews,
    users: state.restoReviews.users,
    loading: state.restoReviews.loading
})

export default connect(mapStateToProps)(reviews)
