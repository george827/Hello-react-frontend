import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting', async () => {
  const response = await axios.get('http://localhost:3000/api/greetings');
  const { greeting } = response.data;
  return greeting;
});

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchGreeting.pending]: (state) => {
      const newState = { ...state, loading: true, error: false };
      return newState;
    },
    [fetchGreeting.fulfilled]: (state, action) => {
      const newState = { ...state, loading: false, greeting: action.payload };
      return newState;
    },
    [fetchGreeting.rejected]: (state) => {
      const newState = { ...state, loading: false, error: true };
      return newState;
    },
  },
});

export default greetingSlice.reducer;
