import React from 'react';
import logo from './logo.svg';
import {createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import Main from './routes/main'
import createSagaMiddleware  from 'redux-saga'
import mysagaMiddleware from './redux/saga/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer , applyMiddleware(sagaMiddleware) );
sagaMiddleware.run(mysagaMiddleware);

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
