import { ISLOGIN, WHOSLOGIN, USERSIGNOUT } from './actionType'

const userLogin = {
    isLogin: false,
    whosLogin: {}
}

export default function userReducer (state={userLogin}, action) {
    const { type, payload } = action

    switch (type) {
        case ISLOGIN:
            return {
                ...userLogin,
                isLogin: true,
                whosLogin: payload
            }
        case WHOSLOGIN:
            return {
                ...userLogin,
                whosLogin: payload
            }
        case USERSIGNOUT: {
            return {
                ...userLogin,
                isLogin: false,
                whosLogin: {}
            }
        }
        default:
            return state
    }
}