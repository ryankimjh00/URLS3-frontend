import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface ImageInfoState {
  id: string
}

// Define the initial state using that type
const initialState: ImageInfoState = {
  id: ''
};

export const ImageSlice = createSlice({
  name: 'Image',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeImage: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    }
  }
});

export const { storeImage } = ImageSlice.actions;

export default ImageSlice.reducer;
