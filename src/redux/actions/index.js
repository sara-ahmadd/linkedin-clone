//all async actions
import * as actions from "./actions";
import { auth, googleProvider } from "./../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

export function signUp() {
  return (dispatch) => {
    signInWithPopup(auth, googleProvider)
      .then((credntials) => {
        dispatch(actions.setUser(credntials.user));
      })
      .catch((err) => alert(err));
  };
}
