import { GET_USER_BY_ID_FAILURE, GET_USER_BY_ID_SUCCESS } from '../Action/Types';

const initialState = {
    user: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case GET_USER_BY_ID_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
