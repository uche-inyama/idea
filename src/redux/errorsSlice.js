import { createSlice } from '@reduxjs/toolkit';
import { fetchCountry } from './searchFormSlice';

export const errorSlice = createSlice({
  name: "errors",
  initialState: "",
  extraReducers(builder) {
    builder
      .addCase(fetchCountry.pending, () => '')
      .addCase(fetchCountry.rejected, (state, action) => {
        console.log('me Oh')
        return action
      })
  }
})

export default errorSlice.reducer;