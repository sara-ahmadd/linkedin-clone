//all async actions
import * as actions from "./actions";
import { auth, googleProvider } from "./../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

export function signUp() {
  return async (dispatch) => {
    await signInWithPopup(auth, googleProvider)
      .then((credentials) => {
        console.log(credentials.user);
        dispatch(actions.setUser(credentials.user));
      })
      .catch((err) => console.log(err));
  };
}
