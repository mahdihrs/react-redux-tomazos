import { FETCH_RESTO_REVIEWS, FETCH_REVIEWS_ERROR, RESET_REVIEW_LOADING } from './actionType'

const reviews = {
    reviews: [],
    users: [],
    loading: true,
    fetchError: {}
}

export default function restoReviews (state=reviews, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_RESTO_REVIEWS:
            return {
                ...reviews,
                reviews: payload.review,
                users: payload.users,
                loading: false
            }
        case FETCH_REVIEWS_ERROR:
            return {
                ...reviews,
                loading: false,
                fetchError: payload
            }
        case RESET_REVIEW_LOADING:
            return {
                ...reviews,
                loading: true
            }
        default:
            return state
    }
}