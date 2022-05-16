import { fireEvent, render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import store  from '../redux/store';
import SearchForm from "./SearchForm";

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <Router>
        <SearchForm />
      </Router>
    </Provider>
  )
  const input = utils.getByLabelText('search-input')
  return {
    input,
    ...utils,
  }
}

test('searchForm', () => {
  const { input } = setup()
  fireEvent.change(input, {target: {value: 'Ghana'}})
  expect(input.value).toBe('Ghana')
})

// culture_map