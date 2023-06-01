import { configureStore } from '@reduxjs/toolkit';
import usersDataReducer from './usersDataSlice';

export const store = configureStore({
  reducer: {
    usersData: usersDataReducer,
  },
});
