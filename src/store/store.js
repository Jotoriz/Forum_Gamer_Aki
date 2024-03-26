import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducers/index';
import TiemNetReducer from '../Reducers/tiemnetReducers';

const store = configureStore({
    reducer: {
        auth: authReducer,
        tiemnet: TiemNetReducer,
    },
});

export default store;
