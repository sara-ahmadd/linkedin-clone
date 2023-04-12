//all async actions
import * as actions from "./actions";
import {
  auth,
  collectionRef,
  database,
  googleProvider,
  storage,
} from "./../../firebase/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { SET_LOADING_STATUS } from "./actionTypes";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";

export function signUp() {
  return (dispatch) =>
    signInWithPopup(auth, googleProvider)
      .then((credentials) => {
        dispatch(actions.setUser(credentials.user));
        // console.log(credentials.user);
      })
      .catch((err) => console.log(err.message));
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
      .catch((err) => alert(err.message));
  };
}

export function postAPI(payload) {
  return (dispatch) => {
    dispatch(actions.setLoading(true));

    if (payload.photo) {
      const storageRef = ref(storage, `photos/${payload.photo.name}`);

      const uploadRef = uploadBytesResumable(storageRef, payload.photo);

      uploadRef.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress = ${progress}%`);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          getDownloadURL(uploadRef.snapshot.ref).then((url) => {
            addDoc(collectionRef, {
              user: {
                email: payload.user.email,
                name: payload.user.displayName,
                image: payload.user.photoURL,
                time: payload.timeStamp,
              },
              comments: 0,
              photo: url,
              video: payload.video,
              description: payload.description,
            });
          });
        }
      );
      dispatch(actions.setLoading(false));
    } else {
      addDoc(collectionRef, {
        user: {
          email: payload.user.email,
          name: payload.user.displayName,
          image: payload.user.photoURL,
          time: payload.timeStamp,
        },
        comments: 0,
        photo: payload.photo,
        video: payload.video,
        description: payload.description,
      });
      dispatch(actions.setLoading(false));
    }
  };
}
export function fetchPosts() {
  return (dispatch) => {
    onSnapshot(collectionRef, (snapshot) => {
      dispatch(
        actions.getPosts([...snapshot.docs.map((x) => [x.data(), x.id])])
      );
      console.log([...snapshot.docs.map((x) => [x.data(), x.id])]);
    });
  };
}
