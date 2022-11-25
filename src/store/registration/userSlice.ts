import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/IUser';
import AuthService from '../../services/AuthService';
import { AuthResponse } from '../../interfaces/AuthResponse';

interface IUserState {
  data?: IUser,
  error: null | string,
  isLoading: boolean,
  isAuth: boolean,
}

const initialState = {
  error: null,
  isLoading: false,
  isAuth: false,
} as IUserState;

export const fetchRegistration = createAsyncThunk<AuthResponse, { email: string, password: string }, { rejectValue: string }>(
  'user/registration',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(email, password);
      const data = await response.data;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.massage);
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegistration.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }).addCase(fetchRegistration.fulfilled, (state, { payload }) => {
      state.data = payload.user
      state.isLoading = false;
    }).addCase(fetchRegistration.rejected, (state, { payload }) => {
      if (payload) state.error = payload;
      state.isLoading = false;
    });
  }
});

export default userSlice.reducer