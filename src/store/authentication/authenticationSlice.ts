import { createSlice } from '@reduxjs/toolkit'

export const authenticationSlice = createSlice({
  name: 'registration',
  initialState: {
    email: null,
    isActivated: false,
    id: null,
  },
  reducers: {
    registration: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
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