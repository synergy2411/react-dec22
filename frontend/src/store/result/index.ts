import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

type ResultState = {
    result: Array<number>
}

const initialState: ResultState = {
    result: []
}

const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        storeResult: (state, action: PayloadAction<number>) => {
            state.result.push(action.payload)
        },
        deleteResult: (state, action: PayloadAction<number>) => {
            state.result = state.result.filter((r, i) => i !== action.payload)
        }
    }
})

export const selectState = (state: RootState) => state.res.result

export const { storeResult, deleteResult } = resultSlice.actions;

export default resultSlice.reducer;