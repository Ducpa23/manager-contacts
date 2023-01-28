import { call, put } from "redux-saga/effects";
import { requestAuthLogin } from "./auth-request";
import { authUpdateUser } from "./auth-slice";

function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data.user,
          accessToken: response.data.authorisation.token,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleAuthLogin };
