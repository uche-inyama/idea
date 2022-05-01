import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRegion = createAsyncThunk('countries/getRegion', async (region) => {
  try {
    const response = await axios.get(`https://restcountries.com/v2/region/${region}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
  status: 'idle',
  data: [],
  error: null
}

const FilterFormSlice = createSlice({
  name: 'FilterForm',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRegion.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchRegion.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchRegion.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default FilterFormSlice.reducer