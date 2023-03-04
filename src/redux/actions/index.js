//all async actions
import * as actions from "./actions";
import { auth, googleProvider } from "./../../firebase/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export function signUp() {
  return async (dispatch) => {
    await signInWithPopup(auth, googleProvider)
      .then((credentials) => {
        console.log(credentials.user);
        dispatch(actions.setUser(credentials.user));
      })
      .catch((err) => console.log(err.message));
  };
}
export function ifAuthStateChangd() {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      user && (await dispatch(actions.setUser(user)));
    });
  };
}

export function signOutFunc() {
  return async (dispatch) => {
    await signOut(auth)
      .then((res) => {
        dispatch(actions.setUser(null));
      })
      .catch((err) => console.log(err.message));
  };
}
