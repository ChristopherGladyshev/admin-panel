import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StringDecoder } from 'string_decoder'

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
    registration: (state, action: PayloadAction<{email: string, password: string}>) => {
      state.email = action.payload.email
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