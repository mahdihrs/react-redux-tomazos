import { FETCH_JAKSEL_RESTOS, FETCH_ERROR } from './actionType'
import Dummy from '../../Dummies/dummydata'

const fetchAllRestos = {
    allRestos: [],
    loading: true,
    fetchError: {}
}

export default function fetchApis(state=fetchAllRestos, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_JAKSEL_RESTOS:
            return {
                ...state,
                allRestos: Dummy,//payload,
                loading: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                fetchError: payload
            }
        default: 
            return state
    }
}