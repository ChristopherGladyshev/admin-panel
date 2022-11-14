import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './authentication/authenticationSlice'

const store = configureStore({
  reducer: {
    user: authenticationReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

