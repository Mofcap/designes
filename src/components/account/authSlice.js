import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('authToken');  // Supprimer le token stocké
    },
    updateUsernameSuccess: (state, action) => {
      if (state.user) {
        state.user.userName = action.payload;  // Mettre à jour le username dans l'état
      }
    },
  },
});

export const { loginSuccess, loginFailure, logout, updateUsernameSuccess } = authSlice.actions;

export default authSlice.reducer;