import {createSlice} from '@reduxjs/toolkit';
import {userType} from '../utils/types';

interface stateType {
  auth: boolean;
  userData: userType;
}

const initialState: stateType = {
  auth: false,
  userData: {
    birthday: 'unknown',
    city: 'unknown',
    email: 'unknown',
    emailVerificated: false,
    lastName: 'unknown',
    name: 'unknown',
    uid: '',
    activRent: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUserData: (state, action) => {
      state.auth = true;
      state.userData = action.payload;
    },
    signOut: state => {
      state.userData = {
        birthday: 'unknown',
        city: 'unknown',
        email: 'unknown',
        emailVerificated: false,
        lastName: 'unknown',
        name: 'unknown',
        uid: '',
        activRent: null,
      };
      state.auth = false;
    },
  },
});

export const {setUserData, signOut} = authSlice.actions;
export default authSlice.reducer;
