import {createContext} from 'react';
import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB1qXc-pKmY0Oxy4a_UezrhfDilUCfS7TU",
  authDomain: "easycycle-8f7a6.firebaseapp.com",
  projectId: "easycycle-8f7a6",
  storageBucket: "easycycle-8f7a6.firebasestorage.app",
  messagingSenderId: "638420984593",
  appId: "1:638420984593:web:c7b2abd7224c35553c22b0"
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
const db=getFirestore(app);

export const FirebaseContext=createContext(null);

export const FirebaseProvider=(props)=>{

  const signIn=()=>{
    return signInWithPopup(auth,googleProvider)
    .then(async (result)=>{
      const user=result.user;
      const token=await user.getIdToken();

      const credential=GoogleAuthProvider.credentialFromResult(result);
      const googleAccessToken=credential.accessToken;

      localStorage.setItem("user",JSON.stringify({
        name:user.displayName,
        email:user.email,
        photoURL:user.photoURL,
        token:token,
        googleAccessToken:googleAccessToken
      }));

      console.log("User info saved to local storage");
      return user;
    })
    .catch((err)=>{
      console.log("Sign in failed");
      throw err;
    })
  }

  return(
    <FirebaseContext.Provider value={{signIn, auth, db}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}