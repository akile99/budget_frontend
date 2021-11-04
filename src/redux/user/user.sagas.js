import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import { signInFailure, signInSuccess } from "./user.action";

function* fetchUser(email, password) {
  try {
    const req = yield fetch(
      "https://star-ship-enterprise.herokuapp.com/signin",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const user = yield req.user();
    console.log(user);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const user = yield fetchUser(email, password);

    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onSignInStart)]);
}
