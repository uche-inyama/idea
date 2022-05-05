import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCountries = createAsyncThunk('countries/getCountries', async () => {
  try {
    const response = await axios.get('https://restcountries.com/v2/all')
    return response.data
  } catch (err){
    console.log(err.message) 
  }
})

const initialState = {
  status: 'idle',
  data: [],
  error: null
}

const countriesSlice = createSlice ({
  name: 'countriesList',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default countriesSlice.reducer