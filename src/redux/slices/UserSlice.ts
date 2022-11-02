import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../interface/UserType';

// Define a type for the slice state

const initialState: UserType = {
  pk: -1,
  username: '',
  email: ' ',
  first_name: ' ',
  last_name: ' '
};

export const UserSlice = createSlice({
  name: 'User',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeUser: (state, action: PayloadAction<UserType>) => {
      state.pk = action.payload.pk;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
    }
  }
});

export const { storeUser } = UserSlice.actions;

export default UserSlice.reducer;
