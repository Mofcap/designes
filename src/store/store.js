import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/account/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});