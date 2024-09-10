import { put, takeEvery } from 'redux-saga/effects'
import { USER_LIST, SET_USER_LIST } from './constants'

function* userList() {
    const URL = 'https://dummyjson.com/users'
    let data = yield fetch(URL)
    data = yield data.json()
    yield put({ type: SET_USER_LIST, payload: data })
    console.log(data)
}

function* SagaData() {
    yield takeEvery(USER_LIST, userList)
}

export default SagaData;
