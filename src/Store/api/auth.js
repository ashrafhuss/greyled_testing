import http from "../../services/http";
import storage from "../../services/storage";
import { setToken, setUser, resetAuth } from "../auth/authReducer";
const path1 = "api/users";
const path2 = "api/auth";
export const signinUser = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      //showing loader on ui
      const res = await http.post({ url: path2 + "/signin", body });

      const {
        data: { data: user },
        headers,
      } = res;
      const xAuthToken = headers["x-auth-token"];

      dispatch(setToken(xAuthToken));
      dispatch(setUser(user));
      setCookie("xAuthToken", xAuthToken, 365);
      storage.store("xAuthToken", xAuthToken);
      storage.store("user", user);
      // //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      console.log("err", err);
      //onError event firing
      if (onError) onError(err);
      //else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};

const signupUser = ({ body, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    console.log("body===================", body);
    try {
      //showing loader on ui
      const res = await http.post({ url: path1 + "/signup", body });
      console.log("res===================", res);

      //<div>{res}</div>;

      if (onSuccess) onSuccess(res);
      console.log("success======", res);
    } catch (err) {
      console.log("err===================", err.response.data.message);

      if (onError) onError(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};

const createClassAuth = ({ body, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    console.log("create class", body);
    try {
      //showing loader on ui
      const res = await http.post({ url: path1 + "/signup", body });
      console.log("res===================", res);

      if (onSuccess) onSuccess(res);
      console.log("success======", res);
    } catch (err) {
      console.log("err===================", err.response.data.message);

      if (onError) onError(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
export { signupUser, createClassAuth };

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  if (typeof window !== "undefined")
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
