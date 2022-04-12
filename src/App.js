import React from "react";
import './App.css';
import Routes from "./routes";
import {Provider} from 'react-redux';
import configureStore from './configureStore'
import {createBrowserHistory} from "history";

const history = createBrowserHistory();
const initialState = window.INITIAL_REDUX_STATE;
export const store = configureStore(history, initialState);

function App() {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}

export default App;
