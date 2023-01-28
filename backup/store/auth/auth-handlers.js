import { call } from "redux-saga/effects";
import { requestAuthLogin } from "./auth-request";

function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export { handleAuthLogin };
