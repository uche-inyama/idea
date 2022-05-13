import { render, screen } from '@testing-library/react'
import CountryDetailCard from './countryDetailCard'


test('CountryDetailCard', () => {
  let resource = {
    name: 'Nigeria',
    currencies: [{name: 'Naira'}],
    languages: [{name: 'Ghanian'}, {name: 'Swahili'}]
  }
  render(<CountryDetailCard resource={resource} />)

  expect(screen.getByText(/Swahili/)).toBeInTheDocument()
})