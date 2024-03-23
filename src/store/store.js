import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducers/index';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
