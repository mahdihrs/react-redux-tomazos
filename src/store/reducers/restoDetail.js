import { RESTO_DETAIL, FETCH_DETAIL_ERROR, RESET_DETAIL_LOADING } from './actionType'

const fetchDetail = {
    loading: true,
    detail: {},
    location: {},
    rating: {},
}

export default function reducers (state=fetchDetail, action) {
    const { type, payload } = action
    switch (type) {
        case RESTO_DETAIL:
            return {
                ...state, 
                detail: payload.all, 
                location: payload.loc, 
                rating: payload.rate,
                loading: false
            }
        case FETCH_DETAIL_ERROR:
            return {
                ...state,
                fetchError: payload,
                loading: false
            }
        case RESET_DETAIL_LOADING:
            return {
                ...state,
                loading: true
            }
        default: 
            return state
    }
}