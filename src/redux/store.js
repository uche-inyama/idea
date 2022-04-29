import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './countriesSlice'
import regionsReducer from './filterFormSlice'
import CountryReducer from './searchFormSlice'


export default configureStore({
  reducer: {
    countries: countriesReducer,
    regions: regionsReducer,
    country: CountryReducer
  }
})