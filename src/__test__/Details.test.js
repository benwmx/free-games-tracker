import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Details from '../components/Details';

describe('Details Component test', () => {
  it('Should render', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
