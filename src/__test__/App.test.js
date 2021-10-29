import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

const APP = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

describe('App Component test', async () => {
  it('Should render', () => {
    const app = renderer.create(APP).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('UI components', () => {
    render(APP);
    screen.queryAllByRole('link').forEach((role) => expect(role).toBeInTheDocument());
    screen.debug();
  });
});
