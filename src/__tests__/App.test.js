import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import MockAdapter from 'axios-mock-adapter'
import Axios from 'axios'

const mock = new MockAdapter(Axios)

mock.onGet('https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?department=engineering').reply(200, {
  users: [
    { id: 1, name: 'Elias Hbc' }
  ]
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
