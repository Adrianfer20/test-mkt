
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import app from "./config";
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const currentUserFirebase = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL, uid } = currentUser;
        resolve({ email, displayName, photoURL, uid });
      } else {
        resolve(null); // o reject(new Error("No user logged in"));
      }
    }, (error) => {
      reject(error);
    });
  });
};

const loginFirebase = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const { email, displayName, photoURL, uid } = user;
        return { email, displayName, photoURL, uid };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { errorCode, errorMessage }
      });
    return response;
  }
  catch (error) {
    return { error }
  }
}

const registerFirebase = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const { email, displayName, photoURL, uid } = currentUser;
        return { email, displayName, photoURL, uid };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { errorCode, errorMessage }
      });
    return response;
  }
  catch (error) {
    return { error }
  }
}

const logoutFirebase = async () => {
  try {
    const response = await signOut(auth).then(() => {

      return { success: true }
    }).catch((error) => {
      // An error happened.
      return { error }
    });
    return response
  } catch (error) {
    return { error }
  }
}

const updateUserFirebase = async ({displayName, photoURL})=> {
 try {
  const response = await updateProfile(auth.currentUser, {
    displayName, photoURL
   }).then(() => {
     return {success:true}
   }).catch((error) => {
     // An error occurred
     return {success:false, error}
   });
   return response;
 } catch (error) {
     return {success:false, error}
 }
}

export { currentUserFirebase, loginFirebase, logoutFirebase, registerFirebase, updateUserFirebase }