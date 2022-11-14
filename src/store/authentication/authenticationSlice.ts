import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  email: string | null,
  isActivated: boolean,
  id: string | null,
}

const initialState: InitialState = {
  isActivated: false,
  email: null,
  id: null,
}

export const authenticationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registration: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    error: (state) => {

    },
    success: (state, action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { registration, error, success } = authenticationSlice.actions

export default authenticationSlice.reducer