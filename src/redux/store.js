import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './countriesSlice'
import regionsReducer from './filterFormSlice'
import CountryReducer from './searchFormSlice'
import errorReducer from './errorsSlice';


export default configureStore({
  reducer: {
    countries: countriesReducer,
    regions: regionsReducer,
    country: CountryReducer,
    errors: errorReducer
  }
})