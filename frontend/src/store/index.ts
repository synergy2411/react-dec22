import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import resultReducer from './result';

const store = configureStore({
    reducer: {
        ctr: counterReducer,
        res: resultReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;