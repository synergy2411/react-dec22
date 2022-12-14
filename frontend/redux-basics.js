// import { } from '@reduxjs/toolkit';              // ES6 Module

const { configureStore, createSlice, MiddlewareArray } = require("@reduxjs/toolkit");            // CommonJS Import : NodeJS Default

const yourOwnMiddleware = store => next => action => {
    // Perform any Async and Sync Operation here
    console.log("[LOGGER]", store.getState())
    console.log("[LOGGER]", action)
    return next(action);

}

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => { state.value += 1 },
        decrement: (state, action) => { state.value -= 1 },
        addCounter: (state, action) => {
            state.value += action.payload
        }
    }
})

const { increment, decrement, addCounter } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

const store = configureStore({
    reducer: {
        ctr: counterReducer
    },
    middleware: new MiddlewareArray().concat(yourOwnMiddleware)
})

// SUBSCRIPTION
store.subscribe(() => {
    console.log("[SUBSCRIBE] ", store.getState());
})

// console.log("[STATE] ", store.getState());

// ACTION DISPATCHING
store.dispatch(increment())

// console.log("[STATE] ", store.getState());

store.dispatch(increment())

// console.log("[STATE] ", store.getState());

store.dispatch(decrement())

store.dispatch(addCounter(10))