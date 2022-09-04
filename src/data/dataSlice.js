import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { featuredRepo } from './featuredcards';
import { handleData } from './reposData';

const initialState = {
  allRepos: [],
  featuredRepo: [],
  status: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('user/fetch', (x) => {
  try {
    const data = axios.get(`https://api.github.com/repos/${x}`);
    const res = data.then(repo => {
      let repos = [];
      const reposFix = handleData(repo.data);
      repos = [...repos, reposFix];
      return repos
    })
    return res.then(x => x[0])
  } catch (error) {
    return error;
  }
});

const dataSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    featuredData: (state) => {
      const data = state.allRepos;
      const repos = [];
      featuredRepo.map((x) => {
        data.find((y) => {
          if (y.full_name === x) {
            repos.push(y);
            state.featuredRepo = repos;
          }
        });
      });
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchData.pending, (state) => {
      state.status = 'pending';
    })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.allRepos = payload
        state.status = 'fulfilled';
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const { featuredData } = dataSlice.actions;

export const selectAllUsers = (state) => state.users;

export default dataSlice.reducer;
