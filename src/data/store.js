import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';

const Store = configureStore({
  reducer: {
    users: dataReducer,
  },
});

export default Store;
