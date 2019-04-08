import api from '../../api/api'
import { FETCH_RESTO_REVIEWS, FETCH_REVIEWS_ERROR, RESET_REVIEW_LOADING } from '../reducers/actionType'
require('dotenv').config()

export function getReviews(id) {
    return dispatch => {
        api({
            url: `/reviews?res_id=${id}&count=10`,
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'user-key': `${process.env.REACT_APP_ZOMATOS}`
            }
        })
        .then(({data}) => {
            dispatch({
                type: FETCH_RESTO_REVIEWS,
                payload: {
                    review: data.user_reviews.map(e => e.review),
                    users: data.user_reviews.map(e => e.review.user)
                }
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_REVIEWS_ERROR,
                payload: err.response
            })
        })
    }
}

export function resetLoginReviews() {
    return dispatch => {
        dispatch({
            type: RESET_REVIEW_LOADING
        })
    }
}