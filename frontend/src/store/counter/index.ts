import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 109
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const selectState = (state: RootState) => state.ctr.value;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;