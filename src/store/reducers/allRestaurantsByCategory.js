import { FETCH_RESTOS_BY_CAT, FETCH_RESTOS_BY_CAT_ERROR } from '../reducers/actionType'

const allRestosByCat = {
    allRestos: [],
    loading: true,
    errors: {}
}

export default function fetchRestosByCat(state=allRestosByCat, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_RESTOS_BY_CAT:
            return {
                ...allRestosByCat,
                allRestos: payload,
                loading: false
            }
        case FETCH_RESTOS_BY_CAT_ERROR:
            return {
                ...allRestosByCat,
                errors: payload,
                loading: false
            }
        default:
            return state
    }
}