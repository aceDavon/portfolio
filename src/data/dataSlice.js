import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RepoLinks } from './featuredcards';

const initialState = {
  allRepos: [],
  featuredRepo: [],
  status: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('user/fetch', (x) => {
try {
    const data = axios.get(`https://api.github.com/repos/${x}`)
    return data;
} catch (error) {
  return error
}
});

const dataSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    featuredData: (state, action) => {},
  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchData.pending, (state) => {
      state.status = 'pending';
    })
      .addCase(fetchData.fulfilled, (state, {payload}) => {
        state.status = 'fulfilled';
        state.allRepos = state.allRepos.concat(payload.data);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const { featuredData } = dataSlice.actions;

export default dataSlice.reducer;
