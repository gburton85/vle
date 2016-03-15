import React from 'react';
import { render } from "react-dom";
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './containers/app';
import Reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(Reducers);
const rootElement = document.getElementById('app');

if (rootElement) {
  const posts = JSON.parse(rootElement.dataset.posts);

  render(
    <div>
      <Provider store={store}>
        <App posts={ posts }/>
      </Provider>
    </div>,
    rootElement
  );
}


window.createTestUSer = function () {
  $.post({
    url: "http://localhost:1337/auth/signup",
    data: {
      username: 'TestUser',
      email: 'hello@test.com',
      password: 'password'
    }
  });
};
