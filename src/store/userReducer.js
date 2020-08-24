const INITIAL_STATE = {
    userMail: '',
    userLogged: 0,
}

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, userLogged: 1, userMail: action.userMail }
        case "LOG_OUT":
            return { ...state, userLogged: 0, userMail: '' }
        default:
            return state;
    }
}

export default userReducer;