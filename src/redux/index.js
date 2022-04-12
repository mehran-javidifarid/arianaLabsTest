import {combineReducers} from 'redux'
import {all, fork} from 'redux-saga/effects'
import {usersReducers} from "./users/reducers";

export const createRootReducer = () =>
  combineReducers({
    users: usersReducers
  });

export function* rootSaga() {
  yield all([])
}
