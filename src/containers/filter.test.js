import { fireEvent, render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import store  from '../redux/store';
import FilterForm from "./FilterForm";


test('filter-form', () => {
  const { getByTestId, getAllByTestId } = render (
    <Provider store={store}>
      <FilterForm />
    </Provider>
  );
  fireEvent.change(getByTestId('select'), { target: { value: 'Africa'}})
  let options = getAllByTestId('select-option')
  expect(options[0].selected).toBeTruthy();
  expect(options[1].selected).toBeFalsy();
})