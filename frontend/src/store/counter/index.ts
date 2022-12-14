import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
        },
        addCounter: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        subtractCounter: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        }
    }
})

export const selectState = (state: RootState) => state.ctr.value;

export const { increment, decrement, addCounter, subtractCounter } = counterSlice.actions;

export default counterSlice.reducer;