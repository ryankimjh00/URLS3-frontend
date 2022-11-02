import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state

export const UpdateSlice = createSlice({
  name: 'Update',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    x: ['test']
  },

  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    onUpdate: state => {
      state.x.push('sdf');
      state.x.pop();
    }
  }
});

export const { onUpdate } = UpdateSlice.actions;

export default UpdateSlice.reducer;
