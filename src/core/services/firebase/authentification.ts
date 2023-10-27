

import { GoogleAuthProvider, User, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "./initialisation";

const auth = getAuth(app);


export const googleAuth = async ()=> {
  const provider = new GoogleAuthProvider();
  const responseAfterSignedIn = await signInWithPopup(auth, provider)
  const credential = GoogleAuthProvider.credentialFromResult(responseAfterSignedIn);
  let user  : Partial<User>= responseAfterSignedIn?.user;
  if(!!user) {
    return user =  {
      email : user.email,
      photoURL : user.photoURL,
      uid : user.uid,
      phoneNumber : user.phoneNumber,
    }
  }
  return  { };
}


export const CreateUserWithEmailAndPassword = async (email  : string , password : string ) => {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    return user;
}

export const SignWithEmailAndPassword = async (email : string , password : string ) => {
  const user = await signInWithEmailAndPassword(auth,email,password);
  return user;
}