import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import Routes from "./routes";
import {createBrowserHistory} from "history";
import configureStore from "./configureStore";

const history = createBrowserHistory();
const initialState = window.INITIAL_REDUX_STATE;
export const store = configureStore(history, initialState);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Routes/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
