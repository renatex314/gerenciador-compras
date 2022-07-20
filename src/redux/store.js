import { configureStore } from '@reduxjs/toolkit';
import comprasReducer from './reducers/compras';

export default configureStore({
    reducer: {
        compras: comprasReducer
    }
});