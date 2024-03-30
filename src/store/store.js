import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducers/index';
import TiemNetReducer from '../Reducers/tiemnetReducers';
import userReducer from '../Reducers/userReducers';

const store = configureStore({
    reducer: {
        auth: authReducer,
        tiemnet: TiemNetReducer,
        user: userReducer,
    },
});

export default store;
