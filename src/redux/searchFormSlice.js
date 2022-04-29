import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountry = createAsyncThunk('countries/getCountry', async (country) => {
  const response = await axios.get(`https://restcountries.com/v2/name/${country}?fullText=true`)
  console.log(response)
  return response.data
})

const initialState = {
  status: 'idle',
  data: [],
  error: null
}

const SearchFormSlice = createSlice({
  name: 'SearchForm',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountry.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default SearchFormSlice.reducer