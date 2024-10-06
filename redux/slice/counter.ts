import type CounterType from 'types/counter'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const counterInitialState = {
  data: {
    value: 0
  } as CounterType
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    reset: (state) => {
      state.data.value = 0
    },
    increment: (state, action: PayloadAction<number>) => {
      state.data.value += action.payload
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.data.value -= action.payload
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions
