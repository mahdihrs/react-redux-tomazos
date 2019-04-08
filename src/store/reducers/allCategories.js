import { FETCH_CATEGORIES, FETCH_CATEGORIES_ERROR } from '../reducers/actionType'
import CategoriesDummy from '../../Dummies/categories'

const categories = {
    allCategories: [],
    loading: true,
    fetchingErrors: {}
}

export default function fetchCategories(state=categories, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_CATEGORIES:
            return {
                ...categories,
                allCategories: payload,
                loading: false
            }
        case FETCH_CATEGORIES_ERROR:
            return {
                ...categories,
                fetchingErrors: payload,
                loading: false
            }
        default:
            return state
    }
}