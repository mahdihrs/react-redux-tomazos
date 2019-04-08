import { RESTOS_BY_LOC, FETCH_RESTOSBYLOC_ERROR } from './actionType'

const restosByCities = {
    num_restaurants: 0,
    top_cuisines: [],
    best_rated_restaurants: [],
    loading: true,
    error: {}
}

export default function fetchRestos(state=restosByCities, action) {
    const { type, payload } = action

    switch (type) {
        case RESTOS_BY_LOC:
            return {
                ...restosByCities,
                num_restaurants: payload.totalRes,
                top_cuisines: payload.cuisines,
                best_rated_restaurants: payload.res,
                loading: false
            }
        case FETCH_RESTOSBYLOC_ERROR:
            return {
                ...restosByCities,
                err: payload,
                loading: false
            }
        default:
            return state
    }
}