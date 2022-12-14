import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import counterReducer from './counter';
import resultReducer from './result';

const logger = (store: any) => (next: any) => (action: any) => {
    console.log("[LOGGER]", store.getState());
    console.log("[LOGGER]", action);
    setTimeout(() => {      // Async Task
        return next(action)
    }, 1500)
}

const store = configureStore({
    reducer: {
        ctr: counterReducer,
        res: resultReducer
    },
    middleware: new MiddlewareArray().concat(logger),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;