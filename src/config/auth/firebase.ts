import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

if (!getApps().length) {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_MOTO_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_MOTO_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_MOTO_FIREBASE_PROJECTID,
  });
}

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithFacebook = () => signInWithPopup(auth, facebookProvider);
export const signOut = () => firebaseSignOut(auth);
export const onAuthState = (cb: (u: User | null) => void) =>
  onAuthStateChanged(auth, cb);
