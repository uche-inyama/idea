import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store  from './redux/store';
import App from './App';

describe('App component', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const textElement = screen.getByText(/Dark Mode/i);
    expect(textElement).toBeInTheDocument();
  });
})
