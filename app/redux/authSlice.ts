import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.auth = true;
      state.userData = action.payload;
    },
    signOut: state => {
      state.auth = false;
      state.userData = {};
    },
  },
});

export const {setUserData} = authSlice.actions;
export default authSlice.reducer;
