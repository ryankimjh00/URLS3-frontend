import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state

export const FocusedS3Slice = createSlice({
  name: 'FocusedS3',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    s3_id: -1
  },
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeFocusedS3: (state, action: PayloadAction<number>) => {
      state.s3_id = action.payload;
    }
  }
});

export const { storeFocusedS3 } = FocusedS3Slice.actions;

export default FocusedS3Slice.reducer;
